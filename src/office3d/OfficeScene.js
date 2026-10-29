import * as THREE from 'three';

// ============================================================================
// AXIORYN AI LABS — Escritório Corporativo Isométrico (Evolução 3D v2)
// - Ambiente corporativo: recepção executiva, hub central (Atlas),
//   4 departamentos com divisórias de vidro e Sala de Reunião (Boardroom).
// - Avatares humanoides articulados refletindo ESTADOS REAIS do backend:
//   IDLE / WORKING / WAITING_APPROVAL / BLOCKED / ERROR.
// - Crachás flutuantes com identificação + estado de cada agente.
// - Modo de reunião: durante coordenação ativa os avatares se reúnem no Boardroom.
// - Modo 2D opcional (setViewMode('2d')) para economia de GPU.
// ============================================================================

const STATUS_COLORS = {
  IDLE: 0x64748b,
  WORKING: 0x10b981,
  WAITING_APPROVAL: 0xf59e0b,
  BLOCKED: 0xf97316,
  ERROR: 0xef4444
};

const STATUS_TEXT = {
  IDLE: '#94a3b8',
  WORKING: '#34d399',
  WAITING_APPROVAL: '#fbbf24',
  BLOCKED: '#fb923c',
  ERROR: '#f87171'
};

// Zonas dos departamentos (alinhadas aos home_x/home_z do banco SQLite)
const ZONES = [
  { slug: 'boss',   name: 'SALA DO BOSS (DIRETOR-GERAL)', x: 0,    z: -3.2, color: 0xeab308, isBoss: true },
  { slug: 'atlas',  name: 'HUB CENTRAL DE COORDENAÇÃO',   x: 0,    z: 1.2,  color: 0x38bdf8 },
  { slug: 'pixel',  name: 'TECNOLOGIA & ENGENHARIA',      x: -8.5, z: -6.5, color: 0x6366f1 },
  { slug: 'nexus',  name: 'PESQUISA & INTELIGÊNCIA',      x: 8.5,  z: -6.5, color: 0x10b981 },
  { slug: 'vega',   name: 'RECEPÇÃO • ATENDIMENTO AO CLIENTE', x: 0,    z: 8.15, color: 0xf59e0b, isReception: true },
  { slug: 'sentry', name: 'QUALIDADE & FINANÇAS',         x: 8.5,  z: 6.5,  color: 0xec4899 },
  { slug: 'ares',   name: 'RH & EQUIPES DE IA (ARES)',    x: -8.5, z: 0.0,  color: 0xf97316, compact: true },
  { slug: 'neo',    name: 'SEGURANÇA & DEFESA (NEO)',     x: 8.5,  z: 0.0,  color: 0x00ff66, compact: true, spawnOnHire: true }
];

// Posições de descanso espaçadas no Rooftop Sky Lounge (Terraço Superior y = 4.38)
const ROOFTOP_SPOTS = {
  boss:     { x: 0.0,   y: 4.38, z: -13.3, rotY: 0,           pose: 'STANDING', hasCoffee: true },
  atlas:    { x: -2.4,  y: 4.38, z: -13.6, rotY: 0.4,         pose: 'STANDING', hasCoffee: true },
  pixel:    { x: -8.3,  y: 4.38, z: -15.2, rotY: 0,           pose: 'SEATED',   hasCoffee: false },
  nexus:    { x: 2.4,   y: 4.38, z: -13.6, rotY: -0.4,        pose: 'STANDING', hasCoffee: true },
  vega:     { x: -6.3,  y: 4.38, z: -15.2, rotY: 0,           pose: 'SEATED',   hasCoffee: true },
  sentry:   { x: 5.5,   y: 4.38, z: -14.6, rotY: Math.PI / 5, pose: 'STANDING', hasCoffee: true },
  ares:     { x: -4.2,  y: 4.38, z: -13.4, rotY: 0.2,         pose: 'STANDING', hasCoffee: true },
  neo:      { x: 9.6,   y: 4.38, z: -13.5, rotY: -0.3,        pose: 'STANDING', hasCoffee: false },
  trinity:  { x: 0.2,   y: 4.38, z: -14.8, rotY: 0.25,        pose: 'STANDING', hasCoffee: true },
  orion:    { x: -10.5, y: 4.38, z: -14.0, rotY: 0.5,         pose: 'STANDING', hasCoffee: true },
  morpheus: { x: 7.6,   y: 4.38, z: -14.5, rotY: -0.4,        pose: 'STANDING', hasCoffee: true },
  kai:      { x: -7.6,  y: 4.38, z: -13.9, rotY: 0.3,         pose: 'STANDING', hasCoffee: false }
};

// Agentes que atendem de frente para os visitantes do balcão (rotY 0 = olha +z)
const RECEPTION_SLUGS = new Set(['vega']);

// Estilo visual individual e vibrante para cada agente (evita bonecos escuros iguais)
const AGENT_STYLES = {
  boss:     { blazer: 0x1e293b, pants: 0x0f172a, shirt: 0xffffff, tie: 0xeab308, skin: 0xf0c3a0, hair: 0x334155, hairStyle: 'quiff',   glasses: false },
  atlas:    { blazer: 0x1d4ed8, pants: 0x1e293b, shirt: 0xf8fafc, tie: 0x38bdf8, skin: 0xe8b48c, hair: 0x1e1b18, hairStyle: 'quiff',   glasses: false, headset: true },
  pixel:    { blazer: 0x4f46e5, pants: 0x1e293b, shirt: 0xe2e8f0, tie: 0x818cf8, skin: 0xf0c3a0, hair: 0x3b2314, hairStyle: 'spiky',   glasses: true },
  nexus:    { blazer: 0x047857, pants: 0x334155, shirt: 0xfef3c7, tie: 0x10b981, skin: 0xd79b72, hair: 0x18181b, hairStyle: 'parted',  glasses: true },
  vega:     { blazer: 0xd97706, pants: 0x1e293b, shirt: 0xffffff, tie: 0xfbbf24, skin: 0xe8b48c, hair: 0x5c2d16, hairStyle: 'long',    glasses: false },
  sentry:   { blazer: 0xbe185d, pants: 0x1f2937, shirt: 0xfdf2f8, tie: 0xf472b6, skin: 0xf0c3a0, hair: 0x271c19, hairStyle: 'long',    glasses: true },
  ares:     { blazer: 0xea580c, pants: 0x1e293b, shirt: 0xffffff, tie: 0xfb923c, skin: 0xc98d63, hair: 0x1c1917, hairStyle: 'parted',  glasses: false },
  neo:      { blazer: 0x06150e, pants: 0x040906, shirt: 0x0f172a, tie: 0x00ff66, skin: 0xf0c3a0, hair: 0x090d16, hairStyle: 'slick',   matrixGlasses: true },
  trinity:  { blazer: 0x6d28d9, pants: 0x111827, shirt: 0xf5f3ff, tie: 0xa78bfa, skin: 0xf0c3a0, hair: 0x090d16, hairStyle: 'long',    matrixGlasses: true },
  orion:    { blazer: 0x0d9488, pants: 0x1e293b, shirt: 0xf0fdfa, tie: 0x2dd4bf, skin: 0xd79b72, hair: 0x292524, hairStyle: 'quiff',   glasses: false },
  morpheus: { blazer: 0x4c1d95, pants: 0x0f172a, shirt: 0xfef08a, tie: 0xc084fc, skin: 0x8d5a3b, hair: 0x111827, hairStyle: 'parted',  matrixGlasses: true },
  kai:      { blazer: 0x0e7490, pants: 0x164e63, shirt: 0xecfeff, tie: 0x22d3ee, skin: 0xd79b72, hair: 0x090d16, hairStyle: 'spiky',   glasses: false, headset: true }
};

// Banco da mesa executiva (lado norte rotY 0 olha para a mesa/+z; sul rotY PI)
const MEETING_SEATS = {
  boss:     { x: 0,    z: -10.1, rotY: 0 },
  atlas:    { x: 0,    z: -9.75, rotY: 0 },
  pixel:    { x: -1.6, z: -9.75, rotY: 0 },
  nexus:    { x: 1.6,  z: -9.75, rotY: 0 },
  vega:     { x: -1.6, z: -7.45, rotY: Math.PI },
  sentry:   { x: 1.6,  z: -7.45, rotY: Math.PI },
  ares:     { x: -2.7, z: -8.6,  rotY: Math.PI / 2 },
  neo:      { x: 2.7,  z: -8.6,  rotY: -Math.PI / 2 },
  // Assentos dos agentes contratados via roadmap de RH (trindade Matrix)
  trinity:  { x: 0,    z: -6.9,  rotY: Math.PI },
  orion:    { x: -4.0, z: -8.6,  rotY: Math.PI / 2 },
  morpheus: { x: 4.0,  z: -8.6,  rotY: -Math.PI / 2 }
};

const BOARDROOM = { cx: 0, cz: -8.6, w: 9.2, d: 5.6 }; // retângulo interno de vidro

const SKIN_TONES = [0xe8b48c, 0xd79b72, 0xc98d63, 0x8d5a3b, 0xf0c3a0];
const HAIR_TONES = [0x2b2118, 0x141414, 0x3d2b1f, 0x4a4a55, 0x6b4a2f];
const SHIRT_TONES = [0xeef2f7, 0xe6ebf2, 0xeaf2ee, 0xf6efe2, 0xf2ecf4];

function hexStr(c) {
  return '#' + c.toString(16).padStart(6, '0');
}

function makeCanvasTexture(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 2;
  return { canvas, ctx: canvas.getContext('2d'), texture };
}

function createPorcelainTileTexture() {
  const { ctx, texture } = makeCanvasTexture(512, 512);
  ctx.fillStyle = '#121c2e';
  ctx.fillRect(0, 0, 512, 512);
  const step = 64;
  for (let y = 0; y < 512; y += step) {
    for (let x = 0; x < 512; x += step) {
      const shade = ((x / step + y / step) % 2 === 0) ? '#142035' : '#111b2d';
      ctx.fillStyle = shade;
      ctx.fillRect(x + 2, y + 2, step - 4, step - 4);
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.08)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 2, y + 2, step - 4, step - 4);
    }
  }
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(7, 6);
  return texture;
}

function createTeakWoodDeckTexture() {
  const { ctx, texture } = makeCanvasTexture(512, 512);
  ctx.fillStyle = '#4a2f1b';
  ctx.fillRect(0, 0, 512, 512);
  const plankH = 32;
  const tones = ['#5c3a21', '#694328', '#52331c', '#633e24'];
  for (let row = 0; row < 16; row++) {
    const y = row * plankH;
    ctx.fillStyle = tones[row % tones.length];
    ctx.fillRect(0, y + 1, 512, plankH - 2);
    ctx.fillStyle = 'rgba(20, 10, 4, 0.55)';
    ctx.fillRect(0, y, 512, 2);
    // Juntas verticais desencontradas das réguas de madeira
    const jointX = ((row * 137) % 380) + 60;
    ctx.fillRect(jointX, y, 2, plankH);
  }
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 2);
  return texture;
}

function createLushGrassTexture() {
  const { ctx, texture } = makeCanvasTexture(256, 256);
  ctx.fillStyle = '#14532d';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 600; i++) {
    ctx.fillStyle = i % 2 === 0 ? '#166534' : '#15803d';
    const gx = (i * 73) % 254;
    const gy = (i * 41) % 254;
    ctx.fillRect(gx, gy, 3, 3);
  }
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 2);
  return texture;
}

function createBuildingFacadeTexture() {
  const { ctx, texture } = makeCanvasTexture(512, 512);
  ctx.fillStyle = '#09101d';
  ctx.fillRect(0, 0, 512, 512);
  // Lajes horizontais e janelas iluminadas dos andares inferiores do edifício
  for (let floor = 0; floor < 4; floor++) {
    const fy = floor * 128;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, fy, 512, 18);
    for (let col = 0; col < 8; col++) {
      const wx = col * 64 + 6;
      const lit = (floor + col) % 3 !== 0;
      ctx.fillStyle = lit ? 'rgba(56, 189, 248, 0.22)' : 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(wx, fy + 24, 52, 92);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.strokeRect(wx, fy + 24, 52, 92);
    }
  }
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 2);
  return texture;
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Desenha o crachá corporativo flutuante (nome, função, estado real)
function drawBadge(ctx, w, h, { name, role, status, accentHex }) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(8, 13, 26, 0.92)';
  roundRectPath(ctx, 4, 4, w - 8, h - 8, 14);
  ctx.fill();
  ctx.strokeStyle = accentHex;
  ctx.globalAlpha = 0.65;
  ctx.lineWidth = 3;
  roundRectPath(ctx, 4, 4, w - 8, h - 8, 14);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = accentHex;
  ctx.fillRect(4, 4, 10, h - 8);

  ctx.fillStyle = '#f8fafc';
  ctx.font = '700 30px "Segoe UI", system-ui, sans-serif';
  ctx.fillText((name || 'AGENTE').toUpperCase(), 28, 42);

  ctx.fillStyle = '#9fb0c7';
  ctx.font = '500 16px "Segoe UI", system-ui, sans-serif';
  let roleText = (role || '').toUpperCase();
  if (roleText.length > 34) roleText = roleText.slice(0, 33) + '…';
  ctx.fillText(roleText, 28, 68);

  const st = (status || 'IDLE').toUpperCase();
  ctx.fillStyle = STATUS_TEXT[st] || STATUS_TEXT.IDLE;
  ctx.beginPath();
  ctx.arc(34, 90, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = '700 16px "Segoe UI", system-ui, sans-serif';
  ctx.fillText(st, 48, 95);
}

function drawZoneSignage(ctx, w, h, { title, subtitle, accentHex }) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(8, 13, 26, 0.85)';
  roundRectPath(ctx, 3, 3, w - 6, h - 6, 12);
  ctx.fill();
  ctx.fillStyle = accentHex;
  ctx.fillRect(3, 3, 8, h - 6);
  ctx.fillStyle = '#f1f5f9';
  ctx.font = '700 34px "Segoe UI", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(title, w / 2 + 4, 48);
  ctx.fillStyle = '#8fa3bd';
  ctx.font = '500 22px "Segoe UI", system-ui, sans-serif';
  ctx.fillText(subtitle, w / 2 + 4, 84);
  ctx.textAlign = 'left';
}

export class Office3DScene {
  constructor(containerEl, onSelectAgent) {
    this.container = containerEl;
    this.onSelectAgent = onSelectAgent;
    this.agentMap = new Map(); // slug -> rig entry
    this.demoPreviewMode = false;
    this.meetingMode = false;
    this.viewMode = '3d';
    this._rafActive = false;
    this._t = 0;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060a14);

    const aspect = (this.container.clientWidth || 900) / Math.max(1, this.container.clientHeight || 650);
    this.frustumSize = 27;
    this.camera = new THREE.OrthographicCamera(
      (-this.frustumSize * aspect) / 2,
      (this.frustumSize * aspect) / 2,
      this.frustumSize / 2,
      -this.frustumSize / 2,
      0.1,
      250
    );

    this.cameraTarget = new THREE.Vector3(0, 0.4, -1.2);
    this.sphericalOffset = new THREE.Vector3(24, 22, 24);
    this.zoomLevel = 0.98;
    this.resetCamera();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(this.container.clientWidth || 900, this.container.clientHeight || 650);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    this._setupLights();
    this._buildOfficeArchitecture();
    this._bindInteractions();

    this.clock = new THREE.Clock();
    this._animate = this._animate.bind(this);
    this.setViewMode('3d');
  }

  // ------------------------------------------------------------------ câmara

  resetCamera() {
    this.cameraTarget.set(0, 0.4, -1.2);
    this.zoomLevel = 0.98;
    this._updateCameraTransform();
  }

  _updateCameraTransform() {
    this.camera.position.copy(this.cameraTarget).add(this.sphericalOffset);
    this.camera.zoom = this.zoomLevel;
    this.camera.lookAt(this.cameraTarget);
    this.camera.updateProjectionMatrix();
  }

  // ------------------------------------------------------- modo 3D / 2D (GPU)

  setViewMode(mode) {
    if (mode !== '2d' && mode !== '3d') return;
    if (mode === this.viewMode && this._rafActive) return;
    this.viewMode = mode;
    const show3d = mode === '3d';
    this.renderer.domElement.style.display = show3d ? '' : 'none';
    if (show3d && !this._rafActive) {
      this._rafActive = true;
      this.clock.getDelta(); // descarta o tempo acumulado oculto
      requestAnimationFrame(this._animate);
    } else if (!show3d) {
      this._rafActive = false;
    }
  }

  // ------------------------------------------------------------------ luzes

  _setupLights() {
    const ambient = new THREE.AmbientLight(0xdbeafe, 0.8);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.15);
    dirLight.position.set(16, 28, 14);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    this.scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.4);
    rimLight.position.set(-18, 12, -16);
    this.scene.add(rimLight);
    rimLight.position.set(-18, 12, -16);

    const boardGlow = new THREE.PointLight(0x38bdf8, 12, 12, 1.8);
    boardGlow.position.set(BOARDROOM.cx, 3.4, BOARDROOM.cz);
    this.scene.add(boardGlow);

    const recGlow = new THREE.PointLight(0xffd9a0, 8, 9, 1.8);
    recGlow.position.set(0, 3, 10);
    this.scene.add(recGlow);
  }

  // ------------------------------------------------------------- materiais

  _std(color, opts = {}) {
    return new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0.08, ...opts });
  }

  _glassMaterial() {
    return new THREE.MeshStandardMaterial({
      color: 0xbfe3ff,
      transparent: true,
      opacity: 0.13,
      roughness: 0.08,
      metalness: 0.25,
      side: THREE.DoubleSide,
      depthWrite: false
    });
  }

  _mesh(geo, mat, { x = 0, y = 0, z = 0, castShadow = false, receiveShadow = false } = {}) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = castShadow;
    m.receiveShadow = receiveShadow;
    return m;
  }

  // ------------------------------------------------------------- arquitetura

  _buildOfficeArchitecture() {
    const tileTex = createPorcelainTileTexture();
    // Piso principal com textura de porcelanato arquitetônico
    const floor = this._mesh(
      new THREE.BoxGeometry(28.4, 0.45, 24.4),
      this._std(0xffffff, { map: tileTex, roughness: 0.55, metalness: 0.12 }),
      { x: 0, y: -0.22, z: 0, receiveShadow: true }
    );
    this.scene.add(floor);

    // Paredes externas (isométricas) — altura 4.35m sustentando a laje do Rooftop
    const wallMat = this._std(0x182235, { roughness: 0.65, metalness: 0.15 });
    const backWall = this._mesh(new THREE.BoxGeometry(28.4, 4.35, 0.35), wallMat, { x: 0, y: 2.17, z: -12.17 });
    const leftWall = this._mesh(new THREE.BoxGeometry(0.35, 4.35, 24.4), wallMat, { x: -14.17, y: 2.17, z: 0 });
    this.scene.add(backWall, leftWall);

    // Sanca LED corporativa no topo das paredes
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const ledBack = this._mesh(new THREE.BoxGeometry(28.2, 0.06, 0.06), ledMat, { x: 0, y: 4.28, z: -11.95 });
    const ledLeft = this._mesh(new THREE.BoxGeometry(0.06, 0.06, 24.2), ledMat, { x: -13.95, y: 4.28, z: 0 });
    this.scene.add(ledBack, ledLeft);

    // Janelas panorâmicas do prédio na parede esquerda (fachada de vidro)
    for (let i = 0; i < 3; i++) {
      const wz = -7 + i * 7;
      const frame = this._mesh(new THREE.BoxGeometry(0.14, 2.5, 5.2), this._std(0x2c3a55, { metalness: 0.5 }), { x: -13.95, y: 2.0, z: wz });
      const pane = this._mesh(new THREE.BoxGeometry(0.08, 2.3, 5.0), this._glassMaterial(), { x: -13.88, y: 2.0, z: wz });
      this.scene.add(frame, pane);
    }

    // Estrutura do Prédio Corporativo (andares inferiores) + Rooftop Sky Lounge de Descanso
    this._buildCorporateTowerAndRooftop();

    // Áreas do pavimento operacional principal
    this._buildReception();
    this._buildBoardroom();

    for (const zone of ZONES) {
      if (zone.isBoss) this._buildBossSuite(zone);
      else if (zone.slug === 'atlas') this._buildAtlasHub(zone);
      else if (zone.isReception) this._buildReceptionStation(zone);
      else this._buildWorkstationZone(zone);
      this._buildHumanoidAgent(zone);
    }

    // Elementos arquitetônicos de ambientação
    this._buildPlant(-12.8, 10.6, 1.2);
    this._buildPlant(12.8, 10.6, 1.2);
    this._buildPlant(-12.8, -10.6, 1.0);
    this._buildPlant(12.8, -10.6, 1.0);
  }

  _buildCorporateTowerAndRooftop() {
    const g = new THREE.Group();
    const facadeTex = createBuildingFacadeTexture();
    const woodTex = createTeakWoodDeckTexture();
    const grassTex = createLushGrassTexture();

    // 1. Corpo do Edifício Corporativo abaixo do andar principal (aparência real de prédio)
    const towerBody = this._mesh(
      new THREE.BoxGeometry(28.2, 10.0, 24.2),
      this._std(0xffffff, { map: facadeTex, roughness: 0.4, metalness: 0.35 }),
      { x: 0, y: -5.45, z: 0 }
    );
    g.add(towerBody);

    // Vigas estruturais externas de aço escuro nos cantos do prédio
    const steelMat = this._std(0x0f172a, { metalness: 0.65, roughness: 0.35 });
    for (const cx of [-14.05, 0, 14.05]) {
      for (const cz of [-12.05, 0, 12.05]) {
        if (cx === 0 && cz === 0) continue;
        g.add(this._mesh(new THREE.BoxGeometry(0.55, 10.4, 0.55), steelMat, { x: cx, y: -5.2, z: cz }));
      }
    }
    // Cornija iluminada separando o andar principal da fachada inferior do prédio
    g.add(this._mesh(new THREE.BoxGeometry(28.8, 0.28, 24.8), steelMat, { x: 0, y: -0.35, z: 0 }));
    g.add(this._mesh(new THREE.BoxGeometry(28.9, 0.06, 24.9), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }), { x: 0, y: -0.22, z: 0 }));

    // 2. Laje Superior do ROOFTOP SKY LOUNGE (y = 4.35, terraço panorâmico recuado no topo norte z = -17.6 a -12.0, sem tampar nenhuma sala interna)
    const roofY = 4.35;
    const roofW = 28.4;
    const roofD = 5.6;
    const roofCz = -14.8;

    // Base estrutural da cobertura + Deck de Madeira Teak
    g.add(this._mesh(
      new THREE.BoxGeometry(roofW, 0.35, roofD),
      this._std(0x1e293b, { metalness: 0.35, roughness: 0.55 }),
      { x: 0, y: roofY - 0.17, z: roofCz, receiveShadow: true }
    ));
    // Pilares de sustentação da cobertura do Rooftop
    for (const px of [-13.8, -6.5, 0, 6.5, 13.8]) {
      g.add(this._mesh(new THREE.BoxGeometry(0.45, 4.35, 0.45), steelMat, { x: px, y: 2.15, z: -17.3 }));
    }
    g.add(this._mesh(
      new THREE.BoxGeometry(roofW - 0.4, 0.06, roofD - 0.4),
      this._std(0xffffff, { map: woodTex, roughness: 0.6 }),
      { x: 0, y: roofY + 0.02, z: roofCz, receiveShadow: true }
    ));

    // Gramado paisagístico no Rooftop (jardim suspenso)
    g.add(this._mesh(
      new THREE.BoxGeometry(9.2, 0.08, 2.6),
      this._std(0xffffff, { map: grassTex, roughness: 0.9 }),
      { x: 0, y: roofY + 0.04, z: -13.8, receiveShadow: true }
    ));

    // Guarda-corpo panorâmico de vidro temperado ao redor do Rooftop
    const glassRail = this._glassMaterial();
    const railPostMat = this._std(0x94a3b8, { metalness: 0.7, roughness: 0.25 });
    g.add(this._mesh(new THREE.BoxGeometry(roofW - 2.6, 1.05, 0.06), glassRail, { x: -1.2, y: roofY + 0.55, z: -12.05 }));
    g.add(this._mesh(new THREE.BoxGeometry(roofW, 1.05, 0.06), glassRail, { x: 0, y: roofY + 0.55, z: -17.55 }));
    g.add(this._mesh(new THREE.BoxGeometry(0.06, 1.05, roofD), glassRail, { x: -14.15, y: roofY + 0.55, z: roofCz }));
    g.add(this._mesh(new THREE.BoxGeometry(0.06, 1.05, roofD), glassRail, { x: 14.15, y: roofY + 0.55, z: roofCz }));
    // Corrimão superior inox
    g.add(this._mesh(new THREE.BoxGeometry(roofW - 2.6, 0.06, 0.1), railPostMat, { x: -1.2, y: roofY + 1.08, z: -12.05 }));

    // 3. Escada Arquitetônica Iluminada conectando o Escritório ao Rooftop (lado leste x = 12.8)
    const stepsCount = 12;
    for (let i = 0; i < stepsCount; i++) {
      const sy = (i + 1) * (roofY / stepsCount);
      const sz = -8.4 - i * (3.6 / stepsCount);
      g.add(this._mesh(
        new THREE.BoxGeometry(1.6, 0.12, 0.34),
        this._std(0xffffff, { map: woodTex, roughness: 0.5 }),
        { x: 12.9, y: sy, z: sz, castShadow: true }
      ));
    }

    // 4. Pergolado Arquitetônico + Sofá Lounge de Descanso (Ala Oeste do Rooftop)
    const pergMat = this._std(0x1f2937, { metalness: 0.5, roughness: 0.4 });
    for (const px of [-10.8, -4.4]) {
      for (const pz of [-16.8, -13.2]) {
        g.add(this._mesh(new THREE.BoxGeometry(0.16, 2.5, 0.16), pergMat, { x: px, y: roofY + 1.25, z: pz }));
      }
    }
    for (let b = 0; b < 6; b++) {
      g.add(this._mesh(new THREE.BoxGeometry(6.8, 0.1, 0.12), pergMat, { x: -7.6, y: roofY + 2.48, z: -16.6 + b * 0.68 }));
    }
    // Luz quente aconchegante no Rooftop Lounge
    const roofWarmLight = new THREE.PointLight(0xffb454, 12, 16, 1.5);
    roofWarmLight.position.set(-7.2, roofY + 2.2, -14.8);
    g.add(roofWarmLight);

    // Sofá em L do Rooftop (para os agentes descansarem quando IDLE)
    const sofaBaseMat = this._std(0x334155, { roughness: 0.7 });
    const cushionMat = this._std(0xe2e8f0, { roughness: 0.85 });
    const accentPillow = this._std(0xf97316, { roughness: 0.7 });
    g.add(this._mesh(new THREE.BoxGeometry(3.6, 0.35, 1.0), sofaBaseMat, { x: -7.3, y: roofY + 0.22, z: -15.6, castShadow: true }));
    g.add(this._mesh(new THREE.BoxGeometry(3.5, 0.14, 0.9), cushionMat, { x: -7.3, y: roofY + 0.44, z: -15.6 }));
    g.add(this._mesh(new THREE.BoxGeometry(3.6, 0.55, 0.22), sofaBaseMat, { x: -7.3, y: roofY + 0.65, z: -16.02 }));
    g.add(this._mesh(new THREE.BoxGeometry(0.35, 0.28, 0.18), accentPillow, { x: -8.2, y: roofY + 0.62, z: -15.82 }));
    g.add(this._mesh(new THREE.BoxGeometry(0.35, 0.28, 0.18), accentPillow, { x: -6.4, y: roofY + 0.62, z: -15.82 }));
    // Mesa de centro no Rooftop
    g.add(this._mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.08, 24), this._std(0xffffff, { map: woodTex }), { x: -7.3, y: roofY + 0.42, z: -14.2 }));
    g.add(this._mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.38, 12), pergMat, { x: -7.3, y: roofY + 0.2, z: -14.2 }));

    // 5. Espresso & Sky Bar no Rooftop (Ala Leste x = 6.8)
    g.add(this._mesh(new THREE.BoxGeometry(3.8, 1.05, 0.9), this._std(0x1e293b, { roughness: 0.5 }), { x: 6.8, y: roofY + 0.52, z: -16.1, castShadow: true }));
    g.add(this._mesh(new THREE.BoxGeometry(4.0, 0.08, 1.1), this._std(0xffffff, { map: woodTex, roughness: 0.35 }), { x: 6.8, y: roofY + 1.08, z: -16.1 }));
    // Máquina de café espresso cromada
    g.add(this._mesh(new THREE.BoxGeometry(0.55, 0.42, 0.4), railPostMat, { x: 5.9, y: roofY + 1.32, z: -16.1 }));
    // Mesas bistrô de convivência
    for (const bx of [-2.4, 2.4]) {
      g.add(this._mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.06, 20), this._std(0xf8fafc), { x: bx, y: roofY + 0.88, z: -14.0 }));
      g.add(this._mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.86, 12), pergMat, { x: bx, y: roofY + 0.43, z: -14.0 }));
    }

    // Árvores ornamentais no Rooftop
    const roofPlant1 = this._buildPlant(-12.2, -13.5, 1.35);
    roofPlant1.position.y = roofY;
    const roofPlant2 = this._buildPlant(11.2, -13.5, 1.35);
    roofPlant2.position.y = roofY;
    const roofPlant3 = this._buildPlant(0.0, -16.4, 1.45);
    roofPlant3.position.y = roofY;
    g.add(roofPlant1, roofPlant2, roofPlant3);

    // Letreiro Arquitetônico Principal no Topo do Edifício (acima do Rooftop)
    const logo = makeCanvasTexture(1024, 192);
    logo.ctx.clearRect(0, 0, 1024, 192);
    logo.ctx.fillStyle = 'rgba(8, 13, 26, 0.94)';
    roundRectPath(logo.ctx, 8, 8, 1008, 176, 18);
    logo.ctx.fill();
    logo.ctx.strokeStyle = '#38bdf8';
    logo.ctx.lineWidth = 4;
    roundRectPath(logo.ctx, 8, 8, 1008, 176, 18);
    logo.ctx.stroke();
    logo.ctx.textAlign = 'center';
    logo.ctx.fillStyle = '#f8fafc';
    logo.ctx.font = '800 76px "Segoe UI", system-ui, sans-serif';
    logo.ctx.fillText('AXIORYN AI LABS', 512, 96);
    logo.ctx.fillStyle = '#eab308';
    logo.ctx.font = '600 27px "Segoe UI", system-ui, sans-serif';
    logo.ctx.fillText('HEADQUARTERS TOWER  •  ROOFTOP SKY LOUNGE', 512, 148);
    logo.ctx.textAlign = 'left';

    const logoBackboard = this._mesh(
      new THREE.BoxGeometry(8.6, 1.5, 0.12),
      this._std(0x0f172a, { metalness: 0.5, roughness: 0.35 }),
      { x: 0, y: roofY + 2.35, z: -17.55 }
    );
    const logoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(8.4, 1.42),
      new THREE.MeshBasicMaterial({ map: logo.texture, transparent: true })
    );
    logoPlane.position.set(0, roofY + 2.35, -17.47);
    g.add(logoBackboard, logoPlane);

    // Placa indicativa do Rooftop Lounge
    const roofSign = makeCanvasTexture(512, 96);
    drawZoneSignage(roofSign.ctx, 512, 96, {
      title: 'ROOFTOP SKY LOUNGE & CAFÉ',
      subtitle: 'ÁREA DE DESCANSO DOS AGENTES EM IDLE',
      accentHex: '#10b981'
    });
    const roofSignSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: roofSign.texture, transparent: true, depthTest: false }));
    roofSignSprite.scale.set(3.4, 0.64, 1);
    roofSignSprite.position.set(0, roofY + 1.45, -12.05);
    g.add(roofSignSprite);

    this.scene.add(g);
  }

  _buildBossSuite(zone) {
    const g = new THREE.Group();
    const { x, z } = zone;
    const woodTex = createTeakWoodDeckTexture();

    // Tapete / Piso executivo de madeira nobre com borda dourada para o BOSS da Unidade
    const padGeo = new THREE.BoxGeometry(5.2, 0.09, 3.0);
    g.add(this._mesh(padGeo, this._std(0xffffff, { map: woodTex, roughness: 0.45 }), { x, y: 0.045, z, receiveShadow: true }));
    const border = new THREE.LineSegments(new THREE.EdgesGeometry(padGeo), new THREE.LineBasicMaterial({ color: 0xeab308 }));
    border.position.set(x, 0.05, z);
    g.add(border);

    // Mesa Presidencial do BOSS (Kronos)
    const deskGroup = new THREE.Group();
    deskGroup.position.set(x, 0, z - 0.65);
    deskGroup.add(this._mesh(new THREE.BoxGeometry(2.8, 0.14, 1.25), this._std(0x271911, { roughness: 0.35, metalness: 0.2 }), { y: 1.04, castShadow: true }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(2.6, 0.72, 0.08), this._std(0x111827, { metalness: 0.5 }), { y: 0.64, z: -0.52 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(2.62, 0.06, 0.09), new THREE.MeshBasicMaterial({ color: 0xeab308 }), { y: 0.94, z: -0.53 }));

    const screenMats = [];
    const mainMat = new THREE.MeshBasicMaterial({ color: 0x1e293b });
    screenMats.push(mainMat);
    const monFrame = this._std(0x0f172a, { metalness: 0.5, roughness: 0.3 });
    deskGroup.add(this._mesh(new THREE.BoxGeometry(1.75, 0.85, 0.06), monFrame, { x: 0, y: 1.58, z: -0.35 }));
    deskGroup.add(this._mesh(new THREE.PlaneGeometry(1.65, 0.75), mainMat, { x: 0, y: 1.58, z: -0.31 }));
    g.add(deskGroup);

    const seatPos = this._stationSeat(zone);
    g.add(this._buildChair(seatPos.x, seatPos.z, Math.PI, 0xeab308));

    const sign = makeCanvasTexture(512, 96);
    drawZoneSignage(sign.ctx, 512, 96, {
      title: 'SALA DO BOSS • DIRETOR-GERAL',
      subtitle: 'KRONOS • COMANDO CENTRAL DA UNIDADE',
      accentHex: '#eab308'
    });
    const signSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: sign.texture, transparent: true, depthTest: false }));
    signSprite.scale.set(2.9, 0.54, 1);
    signSprite.position.set(x, 2.55, z - 1.55);
    g.add(signSprite);

    zone.screenMats = screenMats;
    this.scene.add(g);
  }

  _buildPlant(x, z, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    g.add(this._mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.26, 12), this._std(0x28324a), { y: 0.13 }));
    g.add(this._mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.5, 8), this._std(0x3d5a3a), { y: 0.5 }));
    const leafMat = this._std(0x2f7d4f, { roughness: 0.95 });
    for (let i = 0; i < 4; i++) {
      const leaf = this._mesh(new THREE.SphereGeometry(0.2, 10, 8), leafMat, {
        x: Math.cos(i * 1.7) * 0.14,
        y: 0.86 + i * 0.09,
        z: Math.sin(i * 1.7) * 0.14
      });
      leaf.scale.y = 0.8;
      g.add(leaf);
    }
    this.scene.add(g);
    return g;
  }

  // -------------------------------------------- Recepção executiva (fachada)

  _buildReception() {
    const group = new THREE.Group();

    // Tapete corporativo
    group.add(this._mesh(new THREE.BoxGeometry(8.4, 0.05, 3.6), this._std(0x22304a, { roughness: 0.95 }), { x: 0, y: 0.03, z: 9.6, receiveShadow: true }));
    const carpetEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(8.4, 0.06, 3.6)),
      new THREE.LineBasicMaterial({ color: 0x38bdf8 })
    );
    carpetEdge.position.set(0, 0.04, 9.6);
    group.add(carpetEdge);

    // Balcão executivo em L
    const deskBodyMat = this._std(0x2b3a55, { roughness: 0.6, metalness: 0.25 });
    const frontPanel = this._mesh(new THREE.BoxGeometry(4.2, 1.05, 0.42), deskBodyMat, { x: 0, y: 0.52, z: 9.4, castShadow: true });
    group.add(frontPanel);
    group.add(this._mesh(new THREE.BoxGeometry(4.5, 0.09, 1.35), this._std(0x3a4d73, { roughness: 0.5 }), { x: 0, y: 1.08, z: 9.28, castShadow: true }));
    group.add(this._mesh(new THREE.BoxGeometry(0.4, 1.05, 0.9), deskBodyMat, { x: -2.3, y: 0.52, z: 8.95 }));
    group.add(this._mesh(new THREE.BoxGeometry(0.4, 1.05, 0.9), deskBodyMat, { x: 2.3, y: 0.52, z: 8.95 }));

    // Friso LED no balcão
    const ledStrip = this._mesh(new THREE.BoxGeometry(4.0, 0.05, 0.03), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }), { x: 0, y: 0.14, z: 9.62 });
    group.add(ledStrip);

    // Placa do logo no balcão
    const plate = makeCanvasTexture(256, 64);
    plate.ctx.fillStyle = 'rgba(8,13,26,0.9)';
    roundRectPath(plate.ctx, 2, 2, 252, 60, 10);
    plate.ctx.fill();
    plate.ctx.fillStyle = '#e2e8f0';
    plate.ctx.font = '800 30px "Segoe UI", sans-serif';
    plate.ctx.textAlign = 'center';
    plate.ctx.fillText('AXIORYN AI LABS', 128, 42);
    plate.ctx.textAlign = 'left';
    const plateSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: plate.texture, transparent: true }));
    plateSprite.scale.set(2.2, 0.55, 1);
    plateSprite.position.set(0, 2.08, 9.45);
    group.add(plateSprite);

    // Monitor do balcão
    group.add(this._mesh(new THREE.BoxGeometry(0.9, 0.55, 0.05), this._std(0x0a0f18), { x: 1.2, y: 1.5, z: 9.1, rotation: Math.PI * 0.94 }));

    // Balcão de espera (banco executivo)
    const benchMat = this._std(0x1f2a41, { roughness: 0.7 });
    group.add(this._mesh(new THREE.BoxGeometry(2.2, 0.12, 0.6), benchMat, { x: -5.6, y: 0.45, z: 10.3, castShadow: true }));
    group.add(this._mesh(new THREE.BoxGeometry(2.2, 0.5, 0.1), benchMat, { x: -5.6, y: 0.72, z: 10.58 }));
    group.add(this._mesh(new THREE.BoxGeometry(0.1, 0.45, 0.5), this._std(0x0f1524), { x: -6.5, y: 0.22, z: 10.3 }));
    group.add(this._mesh(new THREE.BoxGeometry(0.1, 0.45, 0.5), this._std(0x0f1524), { x: -4.7, y: 0.22, z: 10.3 }));

    // Totem informativo
    group.add(this._mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.15, 10), this._std(0x0f1524, { metalness: 0.4 }), { x: 3.4, y: 0.57, z: 10.4 }));
    const tablet = this._mesh(new THREE.BoxGeometry(0.55, 0.35, 0.04), new THREE.MeshBasicMaterial({ color: 0x0ea5e9 }), { x: 3.4, y: 1.22, z: 10.4 });
    tablet.rotation.x = -0.4;
    group.add(tablet);

    this.scene.add(group);
  }

  // ------------------------------------ Sala de Reunião (Boardroom) central

  _buildBoardroom() {
    const g = new THREE.Group();
    const { cx, cz, w, d } = BOARDROOM;
    const hw = w / 2;
    const hd = d / 2;

    // Piso elevado + tapete executivo
    g.add(this._mesh(new THREE.BoxGeometry(w, 0.06, d), this._std(0x16233c, { roughness: 0.95 }), { x: cx, y: 0.03, z: cz, receiveShadow: true }));
    g.add(this._mesh(new THREE.BoxGeometry(5.6, 0.05, 3.4), this._std(0x223350, { roughness: 0.98 }), { x: cx, y: 0.08, z: cz, receiveShadow: true }));

    // Divisórias de vidro (paredes sul com vão central + laterais)
    const glass = this._glassMaterial();
    const frameMat = this._std(0x33415c, { metalness: 0.5, roughness: 0.4 });
    const H = 2.6;
    const zFront = cz + hd; // parede sul (com porta central)
    const zBack = cz - hd;  // coincide com parede externa
    for (const [px, len] of [[-(hw + 0.9) / 2, hw - 0.9], [(hw + 0.9) / 2, hw - 0.9]]) {
      const wall = this._mesh(new THREE.BoxGeometry(len, H, 0.05), glass, { x: cx + px, y: H / 2 + 0.05, z: zFront });
      const rail = this._mesh(new THREE.BoxGeometry(len, 0.1, 0.12), frameMat, { x: cx + px, y: H + 0.05, z: zFront });
      g.add(wall, rail);
    }
    const doorFrame = this._mesh(new THREE.BoxGeometry(0.1, H + 0.05, 0.14), frameMat, { x: cx - 0.9, y: (H + 0.05) / 2, z: zFront });
    const doorFrame2 = this._mesh(new THREE.BoxGeometry(0.1, H + 0.05, 0.14), frameMat, { x: cx + 0.9, y: (H + 0.05) / 2, z: zFront });
    const doorTop = this._mesh(new THREE.BoxGeometry(1.9, 0.12, 0.14), frameMat, { x: cx, y: H + 0.1, z: zFront });
    g.add(doorFrame, doorFrame2, doorTop);
    for (const sx of [-1, 1]) {
      const side = this._mesh(new THREE.BoxGeometry(0.05, H, d), glass, { x: cx + sx * hw, y: H / 2 + 0.05, z: cz });
      const railS = this._mesh(new THREE.BoxGeometry(0.12, 0.1, d), frameMat, { x: cx + sx * hw, y: H + 0.05, z: cz });
      g.add(side, railS);
      const post = this._mesh(new THREE.BoxGeometry(0.12, H + 0.12, 0.12), frameMat, { x: cx + sx * hw, y: (H + 0.05) / 2, z: zFront });
      g.add(post);
    }

    // Mesa executiva
    g.add(this._mesh(new THREE.BoxGeometry(4.8, 0.14, 1.9), this._std(0x2d3f61, { roughness: 0.45, metalness: 0.2 }), { x: cx, y: 1.0, z: cz, castShadow: true }));
    g.add(this._mesh(new THREE.BoxGeometry(0.18, 0.95, 1.55), this._std(0x1c2740), { x: cx - 2.0, y: 0.48, z: cz }));
    g.add(this._mesh(new THREE.BoxGeometry(0.18, 0.95, 1.55), this._std(0x1c2740), { x: cx + 2.0, y: 0.48, z: cz }));

    // Peça holográfica central da mesa
    this.holoCoreMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 1.2, transparent: true, opacity: 0.85 });
    const holoBase = this._mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.06, 20), this._std(0x0f1524, { metalness: 0.5 }), { x: cx, y: 1.1, z: cz });
    this.holoCore = this._mesh(new THREE.OctahedronGeometry(0.16, 0), this.holoCoreMat, { x: cx, y: 1.38, z: cz });
    g.add(holoBase, this.holoCore);

    // Cadeiras executivas nos assentos da reunião
    for (const slug of Object.keys(MEETING_SEATS)) {
      const seat = MEETING_SEATS[slug];
      g.add(this._buildChair(cx + seat.x, seat.z, seat.rotY, 0x38bdf8));
    }

    // Telão executivo na parede traseira
    g.add(this._mesh(new THREE.BoxGeometry(3.9, 2.2, 0.1), this._std(0x0a0f18, { metalness: 0.3 }), { x: cx, y: 1.75, z: zBack + 0.24 }));
    const tv = makeCanvasTexture(512, 288);
    const tctx = tv.ctx;
    tctx.fillStyle = '#04101c';
    tctx.fillRect(0, 0, 512, 288);
    tctx.fillStyle = '#38bdf8';
    tctx.fillRect(0, 0, 512, 42);
    tctx.fillStyle = '#04101c';
    tctx.font = '700 24px "Segoe UI", sans-serif';
    tctx.fillText('AXIORYN AI LABS — PAINEL OPERACIONAL', 16, 29);
    const bars = [64, 120, 90, 150, 110, 170, 84, 132, 158, 100, 142, 76];
    bars.forEach((bh, i) => {
      tctx.fillStyle = i % 3 === 0 ? '#0ea5e9' : '#155e75';
      tctx.fillRect(24 + i * 38, 264 - bh, 26, bh);
    });
    tctx.fillStyle = '#7dd3fc';
    tctx.font = '600 16px "Segoe UI", sans-serif';
    tctx.fillText('INFERÊNCIA 100% LOCAL • OLLAMA • MODELO ÚNICO 14B EM VRAM', 16, 279);
    const tvMesh = this._mesh(new THREE.PlaneGeometry(3.7, 2.05), new THREE.MeshBasicMaterial({ map: tv.texture }), { x: cx, y: 1.75, z: zBack + 0.31 });
    g.add(tvMesh);

    // Relógio de parede
    const clockFace = this._mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.05, 24), this._std(0xe8edf5), { x: cx + 3.1, y: 2.3, z: zBack + 0.25 });
    clockFace.rotation.x = Math.PI / 2;
    const clockHand1 = this._mesh(new THREE.BoxGeometry(0.03, 0.2, 0.02), this._std(0x0f172a), { x: cx + 3.1, y: 2.3, z: zBack + 0.29 });
    const clockHand2 = this._mesh(new THREE.BoxGeometry(0.03, 0.14, 0.02), this._std(0x0f172a), { x: cx + 3.1, y: 2.3, z: zBack + 0.29 });
    clockHand2.rotation.z = -Math.PI / 2;
    g.add(clockFace, clockHand1, clockHand2);

    // Placa do Boardroom
    const sign = makeCanvasTexture(512, 96);
    drawZoneSignage(sign.ctx, 512, 96, { title: 'BOARDROOM', subtitle: 'SALA DE REUNIÃO EXECUTIVA', accentHex: '#38bdf8' });
    const signSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: sign.texture, transparent: true, depthTest: false }));
    signSprite.scale.set(2.6, 0.49, 1);
    signSprite.position.set(cx, 2.95, cz + hd + 0.35);
    g.add(signSprite);

    this.scene.add(g);
  }

  // ---------------------------------- Zona de estação (mesa, vidro, crachá)

  _buildWorkstationZone(zone) {
    const g = new THREE.Group();
    const { x, z } = zone;
    const isCompact = !!zone.compact;
    const isDynamic = !!zone.dynamic; // Estação dedicada de agente contratado (sem pista/vidro próprios)
    const padW = isCompact ? 5.6 : 6.8;
    const padD = isCompact ? 3.2 : 5.6;
    const hw = padW / 2;
    const hd = padD / 2;

    // Pista do departamento (estação dinâmica fica sobre o piso principal)
    if (!isDynamic) {
      const padGeo = new THREE.BoxGeometry(padW, 0.08, padD);
      const padColor = zone.slug === 'neo' ? 0x06140e : 0x131c31;
      const pad = this._mesh(padGeo, this._std(padColor, { roughness: 0.9 }), { x, y: 0.04, z, receiveShadow: true });
      g.add(pad);
      const borderLine = new THREE.LineSegments(new THREE.EdgesGeometry(padGeo), new THREE.LineBasicMaterial({ color: zone.color }));
      borderLine.position.set(x, 0.04, z);
      g.add(borderLine);
    }

    // Divisórias de vidro nas bordas internas (somente departamentos fixos)
    if (!isDynamic) {
      const glass = this._glassMaterial();
      const frameMat = this._std(0x33415c, { metalness: 0.5, roughness: 0.4 });
      const H = isCompact ? 2.1 : 2.4;
      if (x < 0) {
        // borda interna = lado +x
        g.add(this._mesh(new THREE.BoxGeometry(0.05, H, 2 * hd), glass, { x: x + hw, y: H / 2 + 0.04, z }));
        g.add(this._mesh(new THREE.BoxGeometry(0.12, 0.09, 2 * hd), frameMat, { x: x + hw, y: H + 0.04, z }));
      } else {
        g.add(this._mesh(new THREE.BoxGeometry(0.05, H, 2 * hd), glass, { x: x - hw, y: H / 2 + 0.04, z }));
        g.add(this._mesh(new THREE.BoxGeometry(0.12, 0.09, 2 * hd), frameMat, { x: x - hw, y: H + 0.04, z }));
      }
      if (!isCompact) {
        if (z < 0) {
          // borda interna = lado +z (com vão de passagem central)
          g.add(this._mesh(new THREE.BoxGeometry(hw - 0.9, H, 0.05), glass, { x: x - (0.9 + (hw - 0.9) / 2), y: H / 2 + 0.04, z: z + hd }));
          g.add(this._mesh(new THREE.BoxGeometry(hw - 0.9, H, 0.05), glass, { x: x + (0.9 + (hw - 0.9) / 2), y: H / 2 + 0.04, z: z + hd }));
          g.add(this._mesh(new THREE.BoxGeometry(2 * (hw - 0.9), 0.09, 0.12), frameMat, { x: x, y: H + 0.04, z: z + hd }));
        } else {
          g.add(this._mesh(new THREE.BoxGeometry(hw - 0.9, H, 0.05), glass, { x: x - (0.9 + (hw - 0.9) / 2), y: H / 2 + 0.04, z: z - hd }));
          g.add(this._mesh(new THREE.BoxGeometry(hw - 0.9, H, 0.05), glass, { x: x + (0.9 + (hw - 0.9) / 2), y: H / 2 + 0.04, z: z - hd }));
          g.add(this._mesh(new THREE.BoxGeometry(2 * (hw - 0.9), 0.09, 0.12), frameMat, { x: x, y: H + 0.04, z: z - hd }));
        }
      }
    }

    // Mesa corporativa
    const deskGroup = new THREE.Group();
    deskGroup.position.set(x, 0, z - 0.8);
    deskGroup.add(this._mesh(new THREE.BoxGeometry(3.4, 0.14, 1.5), this._std(0x33415f, { roughness: 0.5, metalness: 0.2 }), { y: 1.02, castShadow: true }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(3.0, 0.55, 0.07), this._std(0x22304a), { y: 0.72, z: -0.5 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.12, 1.0, 1.25), this._std(0x0f1524), { x: -1.55, y: 0.5 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.12, 1.0, 1.25), this._std(0x0f1524), { x: 1.55, y: 0.5 }));

    // Estante superior com itens
    deskGroup.add(this._mesh(new THREE.BoxGeometry(3.2, 0.05, 0.34), this._std(0x2b3a55), { y: 2.05, z: -0.55 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.1, 0.95, 0.3), this._std(0x22304a), { x: -1.5, y: 1.55, z: -0.55 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.1, 0.95, 0.3), this._std(0x22304a), { x: 1.5, y: 1.55, z: -0.55 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.5, 0.16, 0.24), this._std(0x4a3f6b), { x: -0.9, y: 2.16, z: -0.55 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.4, 0.12, 0.22), this._std(0x2f5d8a), { x: -0.3, y: 2.14, z: -0.55 }));

    // Monitores (principal + secundário)
    const screenMats = [];
    const mainMat = new THREE.MeshBasicMaterial({ color: 0x1e293b });
    screenMats.push(mainMat);
    const monFrame = this._std(0x0a0f18, { metalness: 0.35, roughness: 0.4 });
    deskGroup.add(this._mesh(new THREE.BoxGeometry(1.5, 0.9, 0.07), monFrame, { x: -0.25, y: 1.62, z: -0.5 }));
    deskGroup.add(this._mesh(new THREE.PlaneGeometry(1.38, 0.78), mainMat, { x: -0.25, y: 1.62, z: -0.45 }));
    deskGroup.add(this._mesh(new THREE.CylinderGeometry(0.04, 0.09, 0.28, 10), monFrame, { x: -0.25, y: 1.19, z: -0.55 }));

    const secMat = new THREE.MeshBasicMaterial({ color: 0x182234 });
    screenMats.push(secMat);
    const sec = new THREE.Group();
    sec.position.set(1.05, 0, -0.42);
    sec.rotation.y = -0.5;
    sec.add(this._mesh(new THREE.BoxGeometry(1.0, 0.62, 0.06), monFrame, { y: 1.52 }));
    sec.add(this._mesh(new THREE.PlaneGeometry(0.9, 0.52), secMat, { y: 1.52, z: 0.035 }));
    sec.add(this._mesh(new THREE.CylinderGeometry(0.03, 0.07, 0.22, 10), monFrame, { y: 1.15, z: -0.05 }));
    deskGroup.add(sec);

    // Teclado, mouse, caneca
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.8, 0.045, 0.28), this._std(0x111827, { roughness: 0.5 }), { x: -0.15, y: 1.11, z: 0.28 }));
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.1, 0.04, 0.15), this._std(0x111827), { x: 0.45, y: 1.11, z: 0.3 }));
    deskGroup.add(this._mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.11, 10), this._std(hexToNum(zone.color), { roughness: 0.4 }), { x: -0.85, y: 1.14, z: 0.32 }));
    g.add(deskGroup);

    // Cadeira ergonômica sob o assento do avatar
    const seatPos = this._stationSeat(zone);
    g.add(this._buildChair(seatPos.x, seatPos.z, Math.PI, zone.color));

    // Placa do departamento (estação dinâmica exibe o nome do agente)
    const sign = makeCanvasTexture(512, 96);
    drawZoneSignage(sign.ctx, 512, 96, {
      title: isDynamic ? zone.slug.toUpperCase() : zone.name,
      subtitle: isDynamic ? 'ESTAÇÃO DEDICADA AXIORYN' : 'DEPARTAMENTO AXIORYN',
      accentHex: hexStr(zone.color)
    });
    const signSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: sign.texture, transparent: true, depthTest: false }));
    signSprite.scale.set(isDynamic ? 2.3 : 2.7, isDynamic ? 0.44 : 0.51, 1);
    const signZ = z < 0 ? z + hd + 0.3 : z - hd - 0.3;
    signSprite.position.set(x, 2.6, signZ);
    g.add(signSprite);

    // Planta decorativa no canto (apenas departamentos fixos)
    if (!isDynamic) {
      const px = x < 0 ? x - hw + 0.45 : x + hw - 0.45;
      const pz = z < 0 ? z - hd + 0.45 : z + hd - 0.45;
      g.add(this._buildPlant(px, pz, 0.85));
    }

    zone.screenMats = screenMats;
    this.scene.add(g);
  }

  // ------------------------------- Hub Central de Coordenação (Atlas)

  _buildAtlasHub(zone) {
    const g = new THREE.Group();
    const { x, z } = zone;

    // Plataforma circular com anel luminoso
    g.add(this._mesh(new THREE.CylinderGeometry(2.6, 2.7, 0.1, 48), this._std(0x0f1b30, { roughness: 0.85 }), { x, y: 0.05, z, receiveShadow: true }));
    this.hubRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(2.34, 2.56, 48), this.hubRingMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.11, z);
    g.add(ring);

    // Plataforma elevada do balcão
    g.add(this._mesh(new THREE.CylinderGeometry(1.5, 1.6, 0.08, 32), this._std(0x16233c, { roughness: 0.7, metalness: 0.2 }), { x, y: 0.1, z: z - 0.8, receiveShadow: true }));

    // Mesa executiva redonda de comando
    const deskGroup = new THREE.Group();
    deskGroup.position.set(x, 0, z - 0.8);
    deskGroup.add(this._mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.12, 28), this._std(0x33415f, { roughness: 0.45, metalness: 0.3 }), { y: 1.02, castShadow: true }));
    deskGroup.add(this._mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.95, 16), this._std(0x1c2740, { metalness: 0.4 }), { y: 0.5 }));
    deskGroup.add(this._mesh(new THREE.CylinderGeometry(0.5, 0.55, 0.06, 20), this._std(0x1c2740), { y: 0.03 }));

    // Trio de monitores em arco
    const screenMats = [];
    const monFrame = this._std(0x0a0f18, { metalness: 0.35, roughness: 0.4 });
    const mkScreen = (w, h, sx, rz) => {
      const mat = new THREE.MeshBasicMaterial({ color: 0x1e293b });
      screenMats.push(mat);
      const gr = new THREE.Group();
      gr.position.set(sx, 1.6, -0.35);
      gr.rotation.y = rz;
      gr.add(this._mesh(new THREE.BoxGeometry(w, h, 0.07), monFrame, { y: 0 }));
      gr.add(this._mesh(new THREE.PlaneGeometry(w - 0.12, h - 0.12), mat, { y: 0, z: 0.04 }));
      gr.add(this._mesh(new THREE.CylinderGeometry(0.03, 0.07, 0.2, 10), monFrame, { y: -h / 2 - 0.1, z: -0.05 }));
      deskGroup.add(gr);
    };
    mkScreen(1.5, 0.88, 0, 0);
    mkScreen(1.05, 0.6, -1.05, 0.55);
    mkScreen(1.05, 0.6, 1.05, -0.55);
    // Teclado
    deskGroup.add(this._mesh(new THREE.BoxGeometry(0.8, 0.04, 0.26), this._std(0x111827, { roughness: 0.5 }), { x: 0, y: 1.11, z: 0.4 }));
    g.add(deskGroup);

    // Coluna holográfica de coordenação
    this.atlasHoloMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 });
    g.add(this._mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.08, 20), this._std(0x0f1524, { metalness: 0.5 }), { x: x + 2.0, y: 0.04, z: z + 1.6 }));
    const pillar = this._mesh(new THREE.CylinderGeometry(0.1, 0.14, 1.5, 12, 1, true), this.atlasHoloMat, { x: x + 2.0, y: 0.85, z: z + 1.6 });
    g.add(pillar);
    this.atlasHoloGem = this._mesh(new THREE.OctahedronGeometry(0.2, 0), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 1.0 }), { x: x + 2.0, y: 1.75, z: z + 1.6 });
    g.add(this.atlasHoloGem);

    // Cadeira sob o assento do Avatar
    const seatPos = this._stationSeat(zone);
    g.add(this._buildChair(seatPos.x, seatPos.z, Math.PI, zone.color));

    // Placa do Hub
    const sign = makeCanvasTexture(512, 96);
    drawZoneSignage(sign.ctx, 512, 96, { title: 'HUB CENTRAL DE COORDENAÇÃO', subtitle: 'ATLAS • PLANEJAMENTO & ORQUESTRAÇÃO', accentHex: hexStr(zone.color) });
    const signSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: sign.texture, transparent: true, depthTest: false }));
    signSprite.scale.set(3.1, 0.58, 1);
    signSprite.position.set(x, 2.6, z - 3.0);
    g.add(signSprite);

    zone.screenMats = screenMats;
    this.scene.add(g);
  }

  _stationSeat(zone) {
    const home = this._homes?.[zone.slug];
    return { x: home ? home.x : zone.x, z: (home ? home.z : zone.z) + 0.15 };
  }

  // -------------------------------------------- Cadeira ergonômica

  _buildChair(x, z, rotY, accentColor) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    const bodyMat = this._std(0x1d2739, { roughness: 0.6 });
    const baseMat = this._std(0x111827, { metalness: 0.4, roughness: 0.45 });

    g.add(this._mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.05, 20), baseMat, { y: 0.03 }));
    g.add(this._mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.34, 12), baseMat, { y: 0.22 }));
    g.add(this._mesh(new THREE.BoxGeometry(0.46, 0.09, 0.44), bodyMat, { y: 0.58, castShadow: true }));
    const back = this._mesh(new THREE.BoxGeometry(0.44, 0.6, 0.09), bodyMat, { y: 1.0, z: -0.23 });
    back.rotation.x = -0.1;
    g.add(back);
    g.add(this._mesh(new THREE.BoxGeometry(0.3, 0.14, 0.07), bodyMat, { y: 1.36, z: -0.27 }));
    g.add(this._mesh(new THREE.BoxGeometry(0.44, 0.05, 0.1), this._std(accentColor, { emissive: accentColor, emissiveIntensity: 0.25 }), { y: 0.82, z: -0.24 }));
    for (const s of [-1, 1]) {
      g.add(this._mesh(new THREE.BoxGeometry(0.05, 0.05, 0.3), bodyMat, { x: s * 0.27, y: 0.75, z: 0.02 }));
      g.add(this._mesh(new THREE.BoxGeometry(0.05, 0.14, 0.05), baseMat, { x: s * 0.27, y: 0.66, z: 0.12 }));
    }
    return g;
  }

  // ----------------------------------- Estação de atendimento (balcão de recepção)
  // Cadeira atrás do balcão (construído em _buildReception), voltada para os visitantes (+z).
  _buildReceptionStation(zone) {
    const g = new THREE.Group();
    const seatPos = this._stationSeat(zone);
    g.add(this._buildChair(seatPos.x, seatPos.z, 0, zone.color));
    const sign = makeCanvasTexture(512, 96);
    drawZoneSignage(sign.ctx, 512, 96, {
      title: 'RECEPÇÃO & ATENDIMENTO',
      subtitle: 'ORÇAMENTO POR E-MAIL • 1 DIA ÚTIL',
      accentHex: hexStr(zone.color)
    });
    const signSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: sign.texture, transparent: true, depthTest: false }));
    signSprite.scale.set(2.9, 0.54, 1);
    signSprite.position.set(zone.x - 3.5, 2.3, zone.z + 0.5);
    g.add(signSprite);
    this.scene.add(g);
  }

  // ---------------------------------------- Avatares humanoides (rig HD esculpido e colorido)

  _buildHumanoidAgent(zone) {
    const idx = Math.max(0, ZONES.findIndex((z) => z.slug === zone.slug));
    const style = AGENT_STYLES[zone.slug] || {
      blazer: zone.color || 0x2563eb,
      pants: 0x1e293b,
      shirt: 0xf8fafc,
      tie: zone.color || 0x38bdf8,
      skin: SKIN_TONES[idx % SKIN_TONES.length],
      hair: HAIR_TONES[idx % HAIR_TONES.length],
      hairStyle: 'quiff'
    };
    const isNeo = !!style.matrixGlasses;
    const isBoss = zone.slug === 'boss';
    const skin = style.skin;
    const hair = style.hair;
    const blazerColor = style.blazer;
    const shirt = style.shirt;
    const accent = zone.color || style.tie;
    const pants = style.pants;

    const root = new THREE.Group();
    const seat = this._stationSeat(zone);
    root.position.set(seat.x, 0, seat.z);
    root.rotation.y = RECEPTION_SLUGS.has(zone.slug) ? 0 : Math.PI;
    // Escala maior (1.28x) para que os personagens fiquem bem visíveis e definidos no prédio
    root.scale.setScalar(isBoss ? 1.34 : 1.26);
    if (zone.spawnOnHire) {
      root.visible = false;
    }

    const tag = (o) => {
      o.userData.agentSlug = zone.slug;
      return o;
    };

    // Anel luminoso de status no piso
    const ringMat = new THREE.MeshBasicMaterial({ color: accent, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    const ring = tag(new THREE.Mesh(new THREE.RingGeometry(0.45, 0.58, 36), ringMat));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.04;
    root.add(ring);

    // Farol de status flutuante discreto
    const beaconMat = new THREE.MeshBasicMaterial({ color: STATUS_COLORS.WORKING });
    const beacon = tag(new THREE.Mesh(new THREE.OctahedronGeometry(0.085, 0), beaconMat));
    beacon.position.y = 1.72;
    root.add(beacon);

    // Crachá corporativo compacto e nítido (CanvasTexture)
    const badge = makeCanvasTexture(320, 112);
    drawBadge(badge.ctx, 320, 112, { name: zone.slug, role: '', status: 'IDLE', accentHex: hexStr(accent) });
    const badgeSprite = tag(new THREE.Sprite(new THREE.SpriteMaterial({ map: badge.texture, transparent: true, depthTest: false })));
    badgeSprite.scale.set(1.18, 0.41, 1);
    badgeSprite.position.y = 1.95 + (idx % 2) * 0.14;
    root.add(badgeSprite);

    // Pivot pélvico
    const pelvisPivot = new THREE.Group();
    pelvisPivot.position.y = 0.64;
    root.add(tag(pelvisPivot));

    // Pélvis anatômica (volume achatado) + cinto de couro em anel + fivela metálica
    const pantsMat = this._std(pants, { roughness: 0.55 });
    const pelvisBody = tag(this._mesh(new THREE.SphereGeometry(0.17, 20, 16), pantsMat, { castShadow: true }));
    pelvisBody.scale.set(1.04, 0.6, 0.8);
    pelvisPivot.add(pelvisBody);
    const belt = tag(this._mesh(new THREE.TorusGeometry(0.163, 0.02, 8, 28), this._std(0x111827, { roughness: 0.32, metalness: 0.35 }), { y: 0.075 }));
    belt.rotation.x = Math.PI / 2;
    pelvisPivot.add(belt);
    pelvisPivot.add(tag(this._mesh(new THREE.BoxGeometry(0.055, 0.036, 0.024), this._std(isBoss ? 0xfacc15 : 0xd7dde8, { metalness: 0.9, roughness: 0.12 }), { y: 0.075, z: 0.158 })));

    // Pernas articuladas (quadril -> coxa -> joelho -> cano -> sapato oxford com sola e bico)
    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.098, -0.02, 0);
      pelvisPivot.add(tag(hip));
      hip.add(tag(this._mesh(new THREE.CapsuleGeometry(0.068, 0.27, 6, 16), pantsMat, { y: -0.19, castShadow: true })));
      const knee = new THREE.Group();
      knee.position.y = -0.37;
      hip.add(tag(knee));
      knee.add(tag(this._mesh(new THREE.SphereGeometry(0.06, 14, 12), pantsMat)));
      knee.add(tag(this._mesh(new THREE.CapsuleGeometry(0.052, 0.25, 6, 16), pantsMat, { y: -0.19, castShadow: true })));
      // Sapato executivo: cabedal, bico arredondado e sola contrastante
      const shoe = new THREE.Group();
      shoe.position.set(0, -0.385, 0.05);
      shoe.add(tag(this._mesh(new THREE.BoxGeometry(0.105, 0.055, 0.2), this._std(0x131a26, { roughness: 0.28, metalness: 0.3 }), { y: 0.012 })));
      const toe = tag(this._mesh(new THREE.SphereGeometry(0.052, 14, 12), this._std(0x131a26, { roughness: 0.28, metalness: 0.3 }), { y: 0.012, z: 0.115 }));
      toe.scale.set(1.02, 0.62, 1.08);
      shoe.add(toe);
      shoe.add(tag(this._mesh(new THREE.BoxGeometry(0.112, 0.02, 0.225), this._std(0x0a0e16, { roughness: 0.5 }), { y: -0.026 })));
      knee.add(shoe);
      return { hip, knee };
    };
    const legL = makeLeg(-1);
    const legR = makeLeg(1);

    // Torso esculpido (blazer com lapelas, camisa em V, gravata com nó, botões e lenço)
    const torsoPivot = new THREE.Group();
    torsoPivot.position.y = 0.08;
    pelvisPivot.add(tag(torsoPivot));

    const blazerMat = this._std(blazerColor, { roughness: 0.4, metalness: 0.18 });
    // Perfil esculpido: quadril -> cintura afilada -> caixa torácica -> ombros -> nuca
    const torsoPts = [
      [0.02, 0.0], [0.192, 0.0], [0.186, 0.055], [0.166, 0.13], [0.17, 0.21],
      [0.194, 0.31], [0.199, 0.385], [0.187, 0.45], [0.152, 0.495], [0.096, 0.52], [0.076, 0.535]
    ].map(([px, py]) => new THREE.Vector2(px, py));
    const torso = tag(this._mesh(new THREE.LatheGeometry(torsoPts, 30), blazerMat, { y: 0.0, castShadow: true }));
    torso.scale.set(1.1, 1, 0.76);
    torsoPivot.add(torso);

    // Camisa social clara no centro do peito
    torsoPivot.add(tag(this._mesh(new THREE.BoxGeometry(0.155, 0.4, 0.048), this._std(shirt, { roughness: 0.5 }), { y: 0.27, z: 0.135 })));

    // Lapelas chanfradas em alto-relevo
    const lapelMat = this._std(blazerColor, { roughness: 0.34, metalness: 0.22 });
    const lapL = tag(this._mesh(new THREE.BoxGeometry(0.058, 0.34, 0.034), lapelMat, { x: -0.078, y: 0.325, z: 0.15 }));
    lapL.rotation.z = -0.2;
    const lapR = tag(this._mesh(new THREE.BoxGeometry(0.058, 0.34, 0.034), lapelMat, { x: 0.078, y: 0.325, z: 0.15 }));
    lapR.rotation.z = 0.2;
    torsoPivot.add(lapL, lapR);

    // Colarinho branco em V + Gravata com nó na cor do departamento
    const collarL = tag(this._mesh(new THREE.BoxGeometry(0.07, 0.045, 0.02), this._std(0xffffff, { roughness: 0.45 }), { x: -0.042, y: 0.505, z: 0.118 }));
    collarL.rotation.z = 0.32;
    const collarR = tag(this._mesh(new THREE.BoxGeometry(0.07, 0.045, 0.02), this._std(0xffffff, { roughness: 0.45 }), { x: 0.042, y: 0.505, z: 0.118 }));
    collarR.rotation.z = -0.32;
    torsoPivot.add(collarL, collarR);
    const tieMat = this._std(style.tie || accent, { emissive: style.tie || accent, emissiveIntensity: 0.28 });
    const tieKnot = tag(this._mesh(new THREE.BoxGeometry(0.045, 0.045, 0.032), tieMat, { y: 0.462, z: 0.145 }));
    tieKnot.rotation.x = -0.12;
    torsoPivot.add(tieKnot);
    torsoPivot.add(tag(this._mesh(new THREE.BoxGeometry(0.062, 0.31, 0.034), tieMat, { y: 0.285, z: 0.152 })));
    // Lenço de bolso + botões do blazer
    torsoPivot.add(tag(this._mesh(new THREE.BoxGeometry(0.05, 0.022, 0.018), this._std(style.tie || accent, { emissive: style.tie || accent, emissiveIntensity: 0.35 }), { x: 0.115, y: 0.37, z: 0.148 })));
    for (const by of [0.13, 0.05]) {
      torsoPivot.add(tag(this._mesh(new THREE.SphereGeometry(0.011, 10, 10), this._std(0x0d1320, { metalness: 0.7, roughness: 0.25 }), { y: by, z: 0.147 })));
    }

    if (isBoss) {
      // Coroa/Insígnia dourada no peito do BOSS
      torsoPivot.add(tag(this._mesh(new THREE.OctahedronGeometry(0.042, 0), this._std(0xfacc15, { emissive: 0xeab308, emissiveIntensity: 0.65, metalness: 0.9 }), { x: -0.12, y: 0.41, z: 0.16 })));
    }

    // Pescoço + Cabeça expressiva HD
    torsoPivot.add(tag(this._mesh(new THREE.CylinderGeometry(0.06, 0.072, 0.12, 16), this._std(skin, { roughness: 0.5 }), { y: 0.56 })));
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.70;
    torsoPivot.add(tag(headGroup));
    headGroup.scale.setScalar(0.94);

    const skinMat = this._std(skin, { roughness: 0.46 });
    const faceMesh = tag(this._mesh(new THREE.SphereGeometry(0.17, 28, 24), skinMat, { castShadow: true }));
    faceMesh.scale.set(0.97, 1.05, 0.98);
    headGroup.add(faceMesh);

    // Bochechas suaves + mandíbula contornada (rosto menos esférico)
    for (const s of [-1, 1]) {
      const cheek = tag(this._mesh(new THREE.SphereGeometry(0.055, 12, 10), skinMat, { x: s * 0.088, y: -0.02, z: 0.108 }));
      cheek.scale.set(0.8, 0.7, 0.55);
      headGroup.add(cheek);
    }
    const jawMesh = tag(this._mesh(new THREE.SphereGeometry(0.1, 18, 14), skinMat, { x: 0, y: -0.08, z: 0.038 }));
    jawMesh.scale.set(0.88, 0.64, 0.78);
    headGroup.add(jawMesh);

    // Orelhas
    for (const s of [-1, 1]) {
      headGroup.add(tag(this._mesh(new THREE.SphereGeometry(0.037, 12, 12), skinMat, { x: s * 0.162, y: -0.005, z: -0.008 })));
    }

    // Nariz: ponte + pontinha esculpida
    const noseBridge = tag(this._mesh(new THREE.BoxGeometry(0.022, 0.048, 0.024), skinMat, { y: 0.002, z: 0.16 }));
    noseBridge.rotation.x = -0.12;
    headGroup.add(noseBridge);
    headGroup.add(tag(this._mesh(new THREE.SphereGeometry(0.017, 10, 10), skinMat, { y: -0.022, z: 0.172 })));

    // Sorriso executivo sutil
    const mouth = tag(new THREE.Mesh(
      new THREE.TorusGeometry(0.03, 0.006, 8, 16, Math.PI * 0.8),
      this._std(0x8a4a3f, { roughness: 0.6 })
    ));
    mouth.position.set(0, -0.05, 0.152);
    mouth.rotation.z = -Math.PI / 2 - (Math.PI * 0.8) / 2;
    headGroup.add(mouth);

    // Penteado personalizado por agente (tampa + corte: long / spiky / quiff / parted / slick)
    const hairMat = this._std(hair, { roughness: 0.68, metalness: 0.06 });
    const hairCap = tag(this._mesh(new THREE.SphereGeometry(0.184, 26, 20), hairMat, { y: 0.048, z: -0.024 }));
    hairCap.scale.set(1.02, 0.88, 1.04);
    headGroup.add(hairCap);
    if (style.hairStyle === 'long') {
      // Cabelo comprido: volume atrás da cabeça + mechas laterais até o queixo + franja leve
      headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.3, 0.3, 0.16), hairMat, { y: -0.06, z: -0.088 })));
      for (const s of [-1, 1]) {
        const lock = tag(this._mesh(new THREE.BoxGeometry(0.058, 0.21, 0.09), hairMat, { x: s * 0.148, y: -0.065, z: 0.008 }));
        lock.rotation.z = s * 0.06;
        headGroup.add(lock);
      }
      headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.2, 0.045, 0.08), hairMat, { y: 0.13, z: 0.1 })));
    } else if (style.hairStyle === 'spiky') {
      // Cabelo espetado em 6 mechas com alturas/inclinações variadas
      const spikes = [[-0.09, 0.15, 0.03, -0.3], [-0.03, 0.18, 0.07, -0.1], [0.05, 0.19, 0.04, 0.12], [0.1, 0.15, 0.01, 0.34], [-0.06, 0.16, -0.06, -0.2], [0.04, 0.17, -0.07, 0.1]];
      spikes.forEach(([sx, sy, sz, rz]) => {
        const sp = tag(this._mesh(new THREE.ConeGeometry(0.044, 0.1, 8), hairMat, { x: sx, y: sy, z: sz }));
        sp.rotation.z = rz;
        headGroup.add(sp);
      });
    } else {
      // quiff / parted / slick: franja modelada em camadas
      const fringe = tag(this._mesh(new THREE.BoxGeometry(0.22, 0.05, 0.11), hairMat, { y: 0.152, z: 0.088 }));
      if (style.hairStyle === 'quiff') fringe.rotation.x = -0.3;
      if (style.hairStyle === 'parted') fringe.rotation.z = 0.16;
      if (style.hairStyle === 'slick') fringe.rotation.x = -0.12;
      headGroup.add(fringe);
      headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.12, 0.035, 0.09), hairMat, { y: 0.16, z: 0.06 })));
    }

    // Sobrancelhas definidas + Olhos expressivos (grupos escaláveis → piscada realista)
    const browMat = this._std(hair, { roughness: 0.85 });
    const scleraMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const irisMat = new THREE.MeshBasicMaterial({ color: accent });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x090d16 });
    const makeEye = (side) => {
      const eyeG = new THREE.Group();
      eyeG.position.set(side * 0.058, 0.022, 0.15);
      headGroup.add(tag(eyeG));
      eyeG.add(tag(this._mesh(new THREE.SphereGeometry(0.027, 12, 12), scleraMat)));
      eyeG.add(tag(this._mesh(new THREE.SphereGeometry(0.016, 10, 10), irisMat, { z: 0.015 })));
      eyeG.add(tag(this._mesh(new THREE.SphereGeometry(0.0095, 8, 8), pupilMat, { z: 0.023 })));
      // Brilho vivo no olho (catchlight)
      eyeG.add(tag(this._mesh(new THREE.SphereGeometry(0.005, 6, 6), scleraMat, { x: 0.006, y: 0.006, z: 0.027 })));
      return eyeG;
    };
    const eyeL = makeEye(-1);
    const eyeR = makeEye(1);
    for (const s of [-1, 1]) {
      const brow = tag(this._mesh(new THREE.BoxGeometry(0.056, 0.015, 0.016), browMat, { x: s * 0.058, y: 0.062, z: 0.156 }));
      brow.rotation.z = -s * 0.1;
      headGroup.add(brow);
    }

    if (isNeo) {
      // Óculos Matrix com aro verde digital (#00ff66)
      const lensMat = this._std(0x04070a, { metalness: 0.9, roughness: 0.1 });
      const rimMat = this._std(0x00ff66, { emissive: 0x00ff66, emissiveIntensity: 0.55 });
      headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.115, 0.05, 0.026), lensMat, { x: -0.062, y: 0.025, z: 0.175 })));
      headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.115, 0.05, 0.026), lensMat, { x: 0.062, y: 0.025, z: 0.175 })));
      headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.255, 0.013, 0.028), rimMat, { x: 0, y: 0.052, z: 0.176 })));
    } else if (style.glasses) {
      // Óculos de grau com armação retangular definida (lentes vazadas + ponte + hastes)
      const frameMat = this._std(0x0f172a, { metalness: 0.6, roughness: 0.3 });
      const mkLensFrame = (side) => {
        const shape = new THREE.Shape();
        shape.moveTo(-0.028, -0.021);
        shape.lineTo(0.028, -0.021);
        shape.lineTo(0.028, 0.021);
        shape.lineTo(-0.028, 0.021);
        shape.closePath();
        const hole = new THREE.Path();
        hole.moveTo(-0.021, -0.014);
        hole.lineTo(0.021, -0.014);
        hole.lineTo(0.021, 0.014);
        hole.lineTo(-0.021, 0.014);
        hole.closePath();
        shape.holes.push(hole);
        const m = tag(new THREE.Mesh(new THREE.ShapeGeometry(shape), frameMat));
        m.position.set(side * 0.062, 0.026, 0.178);
        headGroup.add(m);
      };
      mkLensFrame(-1);
      mkLensFrame(1);
      headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.032, 0.008, 0.008), frameMat, { x: 0, y: 0.032, z: 0.178 })));
      for (const s of [-1, 1]) {
        headGroup.add(tag(this._mesh(new THREE.BoxGeometry(0.1, 0.008, 0.008), frameMat, { x: s * 0.132, y: 0.032, z: 0.148 })));
      }
    } else if (style.headset) {
      // Headset de atendimento (estilo Kai): arco sobre a cabeça, conchas com anel de LED e microfone
      const hsMat = this._std(0x0f172a, { metalness: 0.5, roughness: 0.35 });
      const band = tag(new THREE.Mesh(new THREE.TorusGeometry(0.186, 0.012, 8, 24, Math.PI), hsMat));
      band.position.set(0, 0.03, -0.01);
      headGroup.add(band);
      for (const s of [-1, 1]) {
        const cup = tag(this._mesh(new THREE.CylinderGeometry(0.045, 0.048, 0.028, 16), hsMat, { x: s * 0.188, y: -0.005, z: -0.008 }));
        cup.rotation.z = Math.PI / 2;
        headGroup.add(cup);
      }
      const hsRing = tag(this._mesh(new THREE.TorusGeometry(0.028, 0.006, 8, 16), this._std(accent, { emissive: accent, emissiveIntensity: 0.55 }), { x: 0.202, y: -0.005, z: -0.008 }));
      hsRing.rotation.y = Math.PI / 2;
      headGroup.add(hsRing);
      const mic = tag(this._mesh(new THREE.CapsuleGeometry(0.006, 0.05, 4, 8), hsMat, { x: 0.13, y: -0.06, z: 0.09 }));
      mic.rotation.z = 0.9;
      headGroup.add(mic);
      headGroup.add(tag(this._mesh(new THREE.SphereGeometry(0.011, 8, 8), this._std(accent, { emissive: accent, emissiveIntensity: 0.6 }), { x: 0.1, y: -0.075, z: 0.105 })));
    }

    // Braços articulados esculpidos: deltoides, cápsulas suaves, punho branco, mão com dedos e relógio
    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.262, 0.462, 0);
      torsoPivot.add(tag(shoulder));
      const deltoid = tag(this._mesh(new THREE.SphereGeometry(0.078, 16, 14), blazerMat, { castShadow: true }));
      deltoid.scale.set(1, 0.9, 0.88);
      shoulder.add(deltoid);
      shoulder.add(tag(this._mesh(new THREE.CapsuleGeometry(0.056, 0.17, 6, 14), blazerMat, { y: -0.14, castShadow: true })));
      const elbow = new THREE.Group();
      elbow.position.y = -0.28;
      shoulder.add(tag(elbow));
      elbow.add(tag(this._mesh(new THREE.SphereGeometry(0.048, 12, 12), blazerMat)));
      elbow.add(tag(this._mesh(new THREE.CapsuleGeometry(0.045, 0.155, 6, 14), blazerMat, { y: -0.12 })));
      // Punho branco da camisa social
      elbow.add(tag(this._mesh(new THREE.CapsuleGeometry(0.047, 0.012, 4, 12), this._std(0xf8fafc, { roughness: 0.5 }), { y: -0.24 })));
      if (side === -1) {
        // Relógio executivo no pulso esquerdo
        const watch = tag(new THREE.Mesh(
          new THREE.TorusGeometry(0.035, 0.009, 8, 18),
          this._std(isBoss ? 0xfacc15 : 0x94a3b8, { metalness: 0.9, roughness: 0.18 })
        ));
        watch.rotation.x = Math.PI / 2;
        watch.position.y = -0.24;
        elbow.add(watch);
      }
      // Mão: palma arredondada + dedos em luva + polegar
      const handMat = this._std(skin, { roughness: 0.5 });
      const hand = tag(this._mesh(new THREE.SphereGeometry(0.05, 14, 14), handMat, { y: -0.295, castShadow: true }));
      hand.scale.set(0.8, 0.6, 1.0);
      elbow.add(hand);
      const fingers = tag(this._mesh(new THREE.CapsuleGeometry(0.02, 0.03, 4, 10), handMat, { y: -0.312, z: 0.045 }));
      fingers.rotation.x = Math.PI / 2;
      elbow.add(fingers);
      const thumb = tag(this._mesh(new THREE.CapsuleGeometry(0.015, 0.032, 4, 8), handMat, { x: side * 0.038, y: -0.285, z: 0.03 }));
      thumb.rotation.z = side * 0.55;
      elbow.add(thumb);

      let coffeeCup = null;
      if (side === 1) {
        coffeeCup = new THREE.Group();
        coffeeCup.position.set(0, -0.315, 0.055);
        coffeeCup.add(tag(this._mesh(new THREE.CylinderGeometry(0.04, 0.032, 0.09, 14), this._std(0xffffff, { roughness: 0.25 }), { y: 0 })));
        coffeeCup.add(tag(this._mesh(new THREE.CylinderGeometry(0.041, 0.036, 0.032, 14), this._std(accent, { emissive: accent, emissiveIntensity: 0.25 }), { y: 0 })));
        elbow.add(coffeeCup);
      }
      return { shoulder, elbow, coffeeCup };
    };
    const armL = makeArm(-1);
    const armR = makeArm(1);

    this.scene.add(root);

    const roofSpot = ROOFTOP_SPOTS[zone.slug] || {
      x: (idx % 2 === 0 ? -1 : 1) * (2.5 + idx),
      y: 4.38,
      z: -14.2,
      rotY: 0,
      pose: 'STANDING',
      hasCoffee: true
    };

    const entry = {
      slug: zone.slug,
      idx,
      group: root,
      pos: { x: seat.x, y: 0, z: seat.z },
      pelvisPivot,
      hipL: legL.hip,
      kneeL: legL.knee,
      hipR: legR.hip,
      kneeR: legR.knee,
      torsoPivot,
      torso,
      headGroup,
      eyeL,
      eyeR,
      blinkAt: this._t + 1 + Math.random() * 4,
      shoulderL: armL.shoulder,
      elbowL: armL.elbow,
      shoulderR: armR.shoulder,
      elbowR: armR.elbow,
      coffeeCup: armR.coffeeCup,
      beacon,
      beaconMat,
      statusRingMat: ringMat,
      screenMats: zone.screenMats || [],
      badgeCtx: badge.ctx,
      badgeTexture: badge.texture,
      accentHex: hexStr(accent),
      status: 'IDLE',
      agentData: null,
      station: { x: seat.x, y: 0, z: seat.z, rotY: RECEPTION_SLUGS.has(zone.slug) ? 0 : Math.PI, pose: 'SEATED' },
      rooftop: roofSpot,
      seat: MEETING_SEATS[zone.slug]
        ? { x: MEETING_SEATS[zone.slug].x, y: 0, z: MEETING_SEATS[zone.slug].z, rotY: MEETING_SEATS[zone.slug].rotY, pose: 'SEATED' }
        // Fallback: futuros agentes sem cadeira fixa ganham um assento na fileira central (livre do boardroom)
        : { x: ((idx % 5) - 2) * 1.5, y: 0, z: 5.2, rotY: Math.PI, pose: 'SEATED' },
      phase: idx * 1.37,
      ang: {
        pelvisY: 0.64,
        hipLx: -Math.PI / 2, kneeLx: Math.PI / 2,
        hipRx: -Math.PI / 2, kneeRx: Math.PI / 2,
        torsoX: 0, torsoY: 0, headX: 0, headY: 0,
        shLx: 0.15, shLz: 0.06, elLx: -0.3,
        shRx: 0.15, shRz: -0.06, elRx: -0.3
      }
    };

    this.agentMap.set(zone.slug, entry);
  }

  // ---------------------------------------------------------- atualização

  updateAgentsFromBackend(agentsList) {
    agentsList.forEach((ag) => {
      let entry = this.agentMap.get(ag.slug);
      if (!entry) {
        const dynamicColor = ag.accent_color ? parseInt(ag.accent_color.replace('#', ''), 16) : 0x00ff66;
        const dynamicZone = {
          slug: ag.slug,
          name: (ag.department_name || ag.role_title || ag.name).toUpperCase(),
          x: typeof ag.home_x === 'number' ? ag.home_x : 8.5,
          z: typeof ag.home_z === 'number' ? ag.home_z : 0.0,
          color: dynamicColor,
          compact: true,
          dynamic: true,
        };
        // Estação própria (mesa + cadeira + placa) na posição home persistida no banco
        this._buildWorkstationZone(dynamicZone);
        this._buildHumanoidAgent(dynamicZone);
        entry = this.agentMap.get(ag.slug);
      }
      if (!entry) return;
      entry.agentData = ag;
      entry.group.visible = (ag.lifecycle_status || 'ACTIVE') === 'ACTIVE';

      // Posição da estação segue o home_x/home_z persistido no banco SQLite
      if (typeof ag.home_x === 'number' && typeof ag.home_z === 'number') {
        this._homes = this._homes || {};
        this._homes[ag.slug] = { x: ag.home_x, z: ag.home_z };
        entry.station = { x: ag.home_x, y: 0, z: ag.home_z + 0.15, rotY: RECEPTION_SLUGS.has(ag.slug) ? 0 : Math.PI, pose: 'SEATED' };
      }

      const effectiveStatus = this.demoPreviewMode ? 'WORKING' : (ag.status || 'IDLE');
      this._applyVisualStatus(entry, effectiveStatus);

      drawBadge(
        entry.badgeCtx,
        320,
        112,
        {
          name: ag.name || entry.slug,
          role: `${ag.department_name || ''}${ag.role_title ? ' • ' + ag.role_title : ''}`,
          status: effectiveStatus,
          accentHex: entry.accentHex
        }
      );
      entry.badgeTexture.needsUpdate = true;
    });
  }

  setDemoPreviewMode(enabled) {
    this.demoPreviewMode = enabled;
    this.agentMap.forEach((entry) => {
      const effectiveStatus = enabled ? 'WORKING' : (entry.agentData ? entry.agentData.status : 'IDLE');
      this._applyVisualStatus(entry, effectiveStatus);
      if (entry.agentData) {
        drawBadge(entry.badgeCtx, 320, 112, {
          name: entry.agentData.name || entry.slug,
          role: entry.agentData.department_name || '',
          status: effectiveStatus,
          accentHex: entry.accentHex
        });
        entry.badgeTexture.needsUpdate = true;
      }
    });
  }

  // Reunião no Boardroom enquanto houver tarefa de coordenação ativa (IN_PROGRESS)
  setMeetingMode(on) {
    this.meetingMode = !!on;
  }

  _applyVisualStatus(entry, status) {
    entry.status = status;
    const col = STATUS_COLORS[status] || STATUS_COLORS.IDLE;
    entry.statusRingMat.color.setHex(col);
    entry.beaconMat.color.setHex(col);

    if (status === 'WORKING') {
      entry.screenMats.forEach((m) => m.color.setHex(0x38bdf8));
    } else if (status === 'WAITING_APPROVAL') {
      entry.screenMats.forEach((m) => m.color.setHex(0xf59e0b));
    } else if (status === 'ERROR') {
      entry.screenMats.forEach((m) => m.color.setHex(0xef4444));
    } else {
      entry.screenMats.forEach((m, i) => m.color.setHex(i === 0 ? 0x1e293b : 0x182234));
    }
  }

  // Curva do "golinho de café" no Rooftop: sobe suave, segura na boca, desce suave (u em 0..1 do ciclo)
  _sipCurve(u) {
    const s0 = 0.42;
    const s1 = 0.82;
    if (u <= s0 || u >= s1) return 0;
    const k = (u - s0) / (s1 - s0);
    const ease = (x) => x * x * (3 - 2 * x);
    if (k < 0.3) return ease(k / 0.3);
    if (k > 0.7) return ease((1 - k) / 0.3);
    return 1;
  }

  // Alvos de pose por estado real do agente, caminhada e descanso no Rooftop
  _poseTargets(entry, t, isMoving, targetPose, onRooftop) {
    const { phase } = entry;
    const isStanding = !isMoving && targetPose === 'STANDING';
    entry._sip = 0;

    const tgt = {
      pelvisY: isStanding ? 0.72 : onRooftop ? 0.55 : 0.64,
      hipLx: 0, kneeLx: 0.07, hipRx: 0, kneeRx: 0.07,
      torsoX: 0.02, torsoY: 0,
      headX: 0.04, headY: 0,
      shLx: 0.14, shLz: 0.08, elLx: -0.32,
      shRx: 0.14, shRz: -0.08, elRx: -0.32
    };

    // ------------------------- Pernas -------------------------
    if (isMoving) {
      const w = Math.sin(t * 9.5 + phase);
      tgt.hipLx = w * 0.5;
      tgt.hipRx = -w * 0.5;
      tgt.kneeLx = Math.max(0.08, -w * 0.7);
      tgt.kneeRx = Math.max(0.08, w * 0.7);
    } else if (isStanding) {
      const sway = Math.sin(t * 0.8 + phase);
      tgt.hipLx = -0.05 + sway * 0.02;
      tgt.hipRx = -0.03 - sway * 0.02;
      tgt.kneeLx = 0.07;
      tgt.kneeRx = 0.07;
    } else {
      // Sentado (estação da mesa ou sofá do Rooftop Lounge)
      tgt.hipLx = -1.52;
      tgt.kneeLx = 1.54;
      tgt.hipRx = -1.5;
      tgt.kneeRx = 1.56;
    }

    // ------------------------- Caminhada -------------------------
    if (isMoving) {
      const w = Math.sin(t * 9.5 + phase);
      tgt.torsoX = 0.09;
      tgt.torsoY = -w * 0.22;
      tgt.headX = 0.05;
      tgt.headY = Math.sin(t * 1.4 + phase) * 0.06;
      const swing = w * 0.4;
      tgt.shLx = -swing - 0.05;
      tgt.shRx = swing - 0.05;
      tgt.shLz = 0.1;
      tgt.shRz = -0.1;
      tgt.elLx = -0.45;
      tgt.elRx = -0.45;
      return tgt;
    }

    // ------------------------- Estados -------------------------
    switch (entry.status) {
      case 'WORKING': {
        if (!isStanding) {
          // Digitação orgânica: taps percussivos nos cotovelos + pausas pensativas naturais
          const gate = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 0.55 + phase * 1.7));
          const tapL = Math.pow(Math.max(0, Math.sin(t * 10.6 + phase)), 3);
          const tapR = Math.pow(Math.max(0, Math.sin(t * 10.6 + phase + 1.05)), 3);
          tgt.torsoX = 0.13;
          tgt.headX = 0.25 + Math.sin(t * 0.6 + phase) * 0.045;
          tgt.headY = Math.sin(t * 0.8 + phase) * 0.12 + Math.sin(t * 0.23 + phase) * 0.06;
          tgt.shLx = -1.02 + 0.04 * Math.sin(t * 2.3 + phase);
          tgt.shLz = 0.13;
          tgt.elLx = -0.7 - tapL * 0.17 * gate - 0.1 * (1 - gate);
          tgt.shRx = -1.02 + 0.04 * Math.cos(t * 2.3 + phase);
          tgt.shRz = -0.13;
          tgt.elRx = -0.7 - tapR * 0.17 * gate - 0.1 * (1 - gate);
        } else {
          tgt.headY = Math.sin(t * 0.7 + phase) * 0.12;
        }
        break;
      }
      case 'WAITING_APPROVAL': {
        tgt.torsoX = -0.02;
        tgt.headX = -0.16 + Math.sin(t * 0.9 + phase) * 0.03;
        tgt.headY = Math.sin(t * 1.2 + phase) * 0.1;
        tgt.shLx = 0.16;
        tgt.shLz = 0.08;
        tgt.elLx = -0.34;
        // Mão direita erguida chamando atenção do humano (balanço suave)
        tgt.shRx = -2.35 + Math.sin(t * 2.6 + phase) * 0.09;
        tgt.shRz = -0.28;
        tgt.elRx = -0.4 + Math.sin(t * 2.6 + phase + 0.8) * 0.08;
        break;
      }
      case 'BLOCKED': {
        tgt.torsoX = 0.2;
        tgt.headX = 0.36 + Math.sin(t * 0.7 + phase) * 0.02;
        // Braços cruzados com leve incômodo
        tgt.shLx = -0.62 + Math.sin(t * 0.8 + phase) * 0.02;
        tgt.shLz = 0.9;
        tgt.elLx = -1.35;
        tgt.shRx = -0.62;
        tgt.shRz = -0.9;
        tgt.elRx = -1.35;
        break;
      }
      case 'ERROR': {
        tgt.torsoX = -0.08;
        tgt.headX = -0.06;
        tgt.headY = Math.sin(t * 8 + phase) * 0.3;
        // Ombros subindo (encolhendo) + braços abertos "o que aconteceu?"
        tgt.shLx = -0.45 + Math.sin(t * 8 + phase) * 0.06;
        tgt.shLz = 0.6;
        tgt.elLx = -0.95;
        tgt.shRx = -0.45 - Math.sin(t * 8 + phase) * 0.06;
        tgt.shRz = -0.6;
        tgt.elRx = -0.95;
        break;
      }
      case 'IDLE':
      default: {
        const hasCoffee = !!entry.rooftop?.hasCoffee;
        if (onRooftop) {
          const sip = hasCoffee ? this._sipCurve(((t + phase * 2.1) % 10) / 10) : 0;
          entry._sip = sip;
          if (isStanding) {
            // Pé firme alternando o peso, olhar tranquilo para o horizonte
            const sway = Math.sin(t * 0.5 + phase);
            tgt.pelvisY = 0.72 + Math.abs(sway) * 0.008;
            tgt.hipLx = -0.03 + sway * 0.015;
            tgt.hipRx = 0.03 - sway * 0.015;
            tgt.torsoX = -0.03;
            tgt.headX = -0.04 - sip * 0.1 + Math.sin(t * 0.4 + phase) * 0.02;
            tgt.headY = Math.sin(t * 0.35 + phase) * 0.3 + Math.sin(t * 0.13 + phase) * 0.15;
            tgt.shLx = 0.1;
            tgt.shLz = 0.09;
            tgt.elLx = -0.3;
            if (hasCoffee) {
              tgt.shRx = -0.2 - sip * 1.0;
              tgt.shRz = -0.12;
              tgt.elRx = -0.55 - sip * 0.75;
            } else {
              tgt.shRx = 0.12;
              tgt.shRz = -0.09;
              tgt.elRx = -0.3;
            }
          } else {
            // Sofá do lounge: encostado, braço esquerdo apoiado, café na direita
            tgt.torsoX = -0.08;
            tgt.headX = -0.02 - sip * 0.12 + Math.sin(t * 0.45 + phase) * 0.03;
            tgt.headY = Math.sin(t * 0.4 + phase) * 0.22 + Math.sin(t * 0.16 + phase) * 0.1;
            tgt.shLx = -0.75;
            tgt.shLz = 0.16;
            tgt.elLx = -0.5;
            if (hasCoffee) {
              tgt.shRx = -0.5 - sip * 0.7;
              tgt.shRz = -0.14;
              tgt.elRx = -0.9 - sip * 0.45;
            } else {
              tgt.shRx = -0.55;
              tgt.shRz = -0.16;
              tgt.elRx = -0.55;
            }
          }
        } else {
          // Na estação: monitorando telas com digitação leve e pausas para pensar
          const gate = 0.35 + 0.4 * (0.5 + 0.5 * Math.sin(t * 0.4 + phase * 2.3));
          const tapL = Math.pow(Math.max(0, Math.sin(t * 8.2 + phase)), 3);
          const tapR = Math.pow(Math.max(0, Math.sin(t * 8.2 + phase + 0.9)), 3);
          tgt.torsoX = 0.1;
          tgt.headX = 0.22 + Math.sin(t * 0.5 + phase) * 0.05;
          tgt.headY = Math.sin(t * 0.55 + phase) * 0.15 + Math.sin(t * 0.2 + phase * 1.9) * 0.1;
          tgt.shLx = -0.95 + 0.04 * Math.sin(t * 2 + phase);
          tgt.shLz = 0.12;
          tgt.elLx = -0.72 - tapL * 0.14 * gate - 0.08 * (1 - gate);
          tgt.shRx = -0.95 + 0.04 * Math.cos(t * 2 + phase);
          tgt.shRz = -0.12;
          tgt.elRx = -0.72 - tapR * 0.14 * gate - 0.08 * (1 - gate);
        }
        break;
      }
    }
    return tgt;
  }

  // ------------------------------------------------------------- interação

  _bindInteractions() {
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let pointerDownPos = { x: 0, y: 0 };

    const dom = this.renderer.domElement;

    dom.addEventListener('pointerdown', (e) => {
      isDragging = true;
      dragStart = { x: e.clientX, y: e.clientY };
      pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      dragStart = { x: e.clientX, y: e.clientY };

      // Projeta os vetores reais Right e Up da câmera no plano do chão (XZ)
      // para que arrastar o mouse mova o piso exatamente na direção da mão (Grab & Pan natural)
      const panScale = 0.032 / this.zoomLevel;
      const forward = new THREE.Vector3().subVectors(this.cameraTarget, this.camera.position);
      forward.y = 0;
      forward.normalize();
      const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

      this.cameraTarget.addScaledVector(right, -dx * panScale);
      this.cameraTarget.addScaledVector(forward, dy * panScale);

      this.cameraTarget.x = Math.max(-14, Math.min(14, this.cameraTarget.x));
      this.cameraTarget.z = Math.max(-14, Math.min(14, this.cameraTarget.z));
      this._updateCameraTransform();
    });

    window.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const movedDist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (movedDist < 6) {
        this._handlePick(e);
      }
    });

    dom.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.1 : 0.9;
        this.zoomLevel = Math.max(0.55, Math.min(2.6, this.zoomLevel * factor));
        this._updateCameraTransform();
      },
      { passive: false }
    );

    window.addEventListener('resize', () => {
      const w = this.container.clientWidth;
      const h = Math.max(1, this.container.clientHeight);
      const asp = w / h;
      this.camera.left = (-this.frustumSize * asp) / 2;
      this.camera.right = (this.frustumSize * asp) / 2;
      this.camera.top = this.frustumSize / 2;
      this.camera.bottom = -this.frustumSize / 2;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });
  }

  _handlePick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    for (const hit of intersects) {
      let obj = hit.object;
      while (obj) {
        if (obj.userData && obj.userData.agentSlug) {
          const entry = this.agentMap.get(obj.userData.agentSlug);
          if (entry && entry.agentData && this.onSelectAgent) {
            this.onSelectAgent(entry.agentData);
          }
          return;
        }
        obj = obj.parent;
      }
    }
  }

  // -------------------------------------------------------------- animação

  _animate() {
    if (!this._rafActive) return;
    requestAnimationFrame(this._animate);
    if (document.hidden) return; // Economiza GPU quando a aba está oculta

    const dt = Math.min(this.clock.getDelta(), 0.1);
    this._t += dt;
    const t = this._t;

    // Pulsos de ambiente
    if (this.hubRingMat) this.hubRingMat.opacity = 0.55 + Math.sin(t * 2.2) * 0.3;
    if (this.holoCore) {
      this.holoCore.rotation.y = t * 1.4;
      this.holoCore.position.y = 1.38 + Math.sin(t * 2.4) * 0.05;
    }
    if (this.atlasHoloGem) {
      this.atlasHoloGem.rotation.y = -t * 1.1;
      this.atlasHoloGem.position.y = 1.75 + Math.sin(t * 1.8) * 0.06;
    }

    const lerpK = Math.min(1, dt * 8);
    // Revezamento inteligente de descanso no Rooftop: apenas 2 agentes ociosos por vez sobem para o Rooftop Lounge,
    // enquanto os demais permanecem em suas estações trabalhando em suas áreas!
    const breakSlotA = Math.floor(t / 28) % 6;
    const breakSlotB = (breakSlotA + 3) % 6;

    this.agentMap.forEach((entry) => {
      const g = entry.group;
      const isBreakTurn = (entry.idx % 6 === breakSlotA) || (entry.idx % 6 === breakSlotB);
      const shouldRestOnRooftop =
        !this.meetingMode &&
        !this.demoPreviewMode &&
        entry.status === 'IDLE' &&
        entry.slug !== 'boss' &&
        entry.slug !== 'atlas' &&
        isBreakTurn &&
        !!entry.rooftop;

      const target = this.meetingMode
        ? entry.seat
        : shouldRestOnRooftop
        ? entry.rooftop
        : entry.station;

      const targetY = typeof target.y === 'number' ? target.y : 0;
      if (!entry.pos) {
        entry.pos = { x: g.position.x, y: g.position.y, z: g.position.z };
      }

      const dx = target.x - entry.pos.x;
      const dy = targetY - entry.pos.y;
      const dz = target.z - entry.pos.z;
      const dist = Math.hypot(dx, dy, dz);
      const isMoving = dist > 0.04;

      if (isMoving) {
        const step = Math.min(dist, 5.2 * dt);
        entry.pos.x += (dx / dist) * step;
        entry.pos.y += (dy / dist) * step;
        entry.pos.z += (dz / dist) * step;

        g.position.x = entry.pos.x;
        g.position.z = entry.pos.z;
        // O pulo da caminhada é aplicado apenas visualmente, sem alterar entry.pos.y (nunca trava andando parado!)
        g.position.y = entry.pos.y + Math.abs(Math.sin(t * 10 + entry.phase)) * 0.04;

        const walkYaw = Math.atan2(dx, dz);
        let daWalk = ((walkYaw - g.rotation.y + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        g.rotation.y += daWalk * Math.min(1, dt * 8);
      } else {
        entry.pos.x = target.x;
        entry.pos.y = targetY;
        entry.pos.z = target.z;
        g.position.x = target.x;
        g.position.y = targetY;
        g.position.z = target.z;

        let da = ((target.rotY - g.rotation.y + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        if (Math.abs(da) > 0.003) {
          g.rotation.y += da * lerpK;
        } else {
          g.rotation.y = target.rotY;
        }
      }

      const onRooftop = shouldRestOnRooftop && !isMoving;
      if (entry.coffeeCup) {
        entry.coffeeCup.visible = onRooftop && !!entry.rooftop?.hasCoffee;
      }

      // Monitores acesos quando o agente está sentado na estação de trabalho
      if (!onRooftop && !isMoving && entry.status === 'IDLE') {
        entry.screenMats.forEach((m, i) => m.color.setHex(i === 0 ? 0x0ea5e9 : 0x1e293b));
      }

      // Pose do rig completo (quadril, pernas articuladas, tronco, cabeça e braços)
      const tgt = this._poseTargets(entry, t, isMoving, target.pose || 'SEATED', onRooftop);
      const a = entry.ang;
      for (const key of Object.keys(a)) {
        if (typeof tgt[key] === 'number') {
          a[key] += (tgt[key] - a[key]) * lerpK;
        }
      }

      if (entry.pelvisPivot) entry.pelvisPivot.position.y = a.pelvisY;
      if (entry.hipL) entry.hipL.rotation.x = a.hipLx;
      if (entry.kneeL) entry.kneeL.rotation.x = a.kneeLx;
      if (entry.hipR) entry.hipR.rotation.x = a.hipRx;
      if (entry.kneeR) entry.kneeR.rotation.x = a.kneeRx;

      entry.torsoPivot.rotation.x = a.torsoX;
      entry.torsoPivot.rotation.y = a.torsoY;
      // Respiração natural: peito expande/contrae de forma contínua
      const breath = Math.sin(t * 1.55 + entry.phase);
      entry.torso.scale.set(1.1 * (1 - breath * 0.012), 1 + breath * 0.02, 0.76 * (1 + breath * 0.014));
      entry.headGroup.rotation.x = a.headX;
      entry.headGroup.rotation.y = a.headY;
      entry.shoulderL.rotation.x = a.shLx;
      entry.shoulderL.rotation.z = a.shLz;
      entry.elbowL.rotation.x = a.elLx;
      entry.shoulderR.rotation.x = a.shRx;
      entry.shoulderR.rotation.z = a.shRz;
      entry.elbowR.rotation.x = a.elRx;

      // Movimento secundário sutil (cabeça/tronco) -- quebra o aspecto rígido de boneco
      const swayZ = Math.sin(t * 0.55 + entry.phase);
      entry.headGroup.rotation.z = swayZ * 0.022;
      entry.torsoPivot.rotation.z = swayZ * 0.012;

      // Piscada realista: intervalo aleatório de 1.8–6s, fechamento suave em ~0.22s
      if (entry.eyeL && entry.eyeR) {
        let open = 1;
        if (t >= entry.blinkAt) {
          const bt = (t - entry.blinkAt) / 0.22;
          if (bt >= 1) {
            entry.blinkAt = t + 1.8 + Math.random() * 4.2;
          } else {
            open = bt < 0.5 ? 1 - bt * 2 : (bt - 0.5) * 2;
            open = 0.06 + 0.94 * open;
          }
        }
        entry.eyeL.scale.y = open;
        entry.eyeR.scale.y = open;
      }

      // Xícara inclina quando vai à boca no ciclo de gole do Rooftop
      if (entry.coffeeCup) entry.coffeeCup.rotation.x = (entry._sip || 0) * 0.55;

      entry.beacon.rotation.y = t * 2.2 + entry.phase;
      if (entry.status === 'WAITING_APPROVAL') {
        entry.beacon.position.y = 1.72 + Math.sin(t * 5) * 0.07;
      } else {
        entry.beacon.position.y += (1.72 - entry.beacon.position.y) * lerpK;
      }
    });

    this.renderer.render(this.scene, this.camera);
  }
}

function hexToNum(hex) {
  if (typeof hex === 'number') return hex;
  return parseInt(hex.replace('#', ''), 16);
}

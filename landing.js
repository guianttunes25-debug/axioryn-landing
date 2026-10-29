import { Office3DScene } from './src/office3d/OfficeScene.js';

// ----------------------------------------------------------------------------
// AXIORYN AI LABS — Recepção Virtual (landing pública)
// O cliente entra "pela porta da frente": vista aérea do prédio -> caminhada
// até o balcão de recepção -> painel comercial da Vega com catálogo/orçamento.
// ----------------------------------------------------------------------------

const CONTACT_EMAIL = 'contato.axioryn@gmail.com';

const SERVICES = [
  { name: 'Portal de Agendamento Inteligente + Triagem Automatizada',
    benefit: 'Sua agenda atende e qualifica consultas 24h por dia, sem secretária sobrecarregada.' },
  { name: 'Landing Page Executiva + Qualificador Automático de Consultas',
    benefit: 'O visitante do seu site vira lead qualificado enquanto você trabalha.' },
  { name: 'API de Cotação Instantânea de Frete + Painel de Rastreio',
    benefit: 'Cotação em segundos e rastreio que o seu cliente acompanha sozinho.' },
  { name: 'Calculadora Web de Economia Solar + Geração Automática de Proposta',
    benefit: 'O cliente calcula a própria economia e sai com a proposta pronta na hora.' }
];

// Equipe core visível na recepção (espelha os homes do banco/escritório 3D).
const CORE_TEAM = [
  { slug: 'atlas',  name: 'ATLAS',  role_title: 'Diretor de Operações',     department_name: 'Coordenação Central',     status: 'WORKING', lifecycle_status: 'ACTIVE', home_x: 0,    home_z: 1.2,  accent_color: '#38bdf8' },
  { slug: 'pixel',  name: 'PIXEL',  role_title: 'Engenheiro de Protótipos', department_name: 'Tecnologia & Engenharia', status: 'WORKING', lifecycle_status: 'ACTIVE', home_x: -8.5, home_z: -6.5, accent_color: '#6366f1' },
  { slug: 'nexus',  name: 'NEXUS',  role_title: 'Pesquisador & Arquiteto',  department_name: 'Pesquisa & Inteligência', status: 'WORKING', lifecycle_status: 'ACTIVE', home_x: 8.5,  home_z: -6.5, accent_color: '#10b981' },
  { slug: 'vega',   name: 'VEGA',   role_title: 'Analista Comercial & Atendimento', department_name: 'Recepção & Atendimento ao Cliente', status: 'WORKING', lifecycle_status: 'ACTIVE', home_x: 0,    home_z: 8.15, accent_color: '#f59e06' },
  { slug: 'sentry', name: 'SENTRY', role_title: 'Auditora de Qualidade',    department_name: 'Qualidade & Finanças',    status: 'WORKING', lifecycle_status: 'ACTIVE', home_x: 8.5,  home_z: 6.5,  accent_color: '#ec4899' }
];

function mailto(subject, body) {
  return 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

const $ = (id) => document.getElementById(id);

const container = $('office3dContainer');
const heroOverlay = $('heroOverlay');
const receptionPanel = $('receptionPanel');
const viewActions = $('viewActions');
const agentToast = $('agentToast');

let entered = false;
let toastTimer = null;

// ------------------------------------------------------------- cena 3D
const scene = new Office3DScene(container, (agentData) => {
  const who = agentData.name || agentData.slug || '';
  const role = [agentData.role_title, agentData.department_name].filter(Boolean).join(' · ');
  agentToast.textContent = '👋 ' + who + (role ? ' — ' + role : '') + ' · (agente da equipe AI Labs)';
  agentToast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => agentToast.classList.add('hidden'), 3800);
});

// Estado inicial: calçada, vista ampla levemente afastada do prédio.
scene.cameraTarget.set(0, 2.0, 0.6);
scene.zoomLevel = 0.6;
scene._updateCameraTransform();
scene.updateAgentsFromBackend(CORE_TEAM);
scene.setDemoPreviewMode(true); // todos animados em WORKING para a vitrine

// Leve órbita de vitrine antes da entrada (para o prédio parecer vivo).
let orbitPhase = 0;
function orbitTick() {
  if (entered) return;
  orbitPhase += 0.0035;
  const a = Math.PI / 4 + Math.sin(orbitPhase) * 0.2;
  const r = 34;
  scene.sphericalOffset.set(r * Math.cos(a), 22, r * Math.sin(a));
  scene._updateCameraTransform();
  requestAnimationFrame(orbitTick);
}
requestAnimationFrame(orbitTick);

// ------------------------------------------------------------- tweens de câmera
function easeInOutCubic(p) {
  return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
}

function tweenCamera(toTarget, toZoom, ms, done) {
  const fromT = scene.cameraTarget.clone();
  const fromZ = scene.zoomLevel;
  const t0 = performance.now();
  function step(now) {
    const p = Math.min(1, (now - t0) / ms);
    const e = easeInOutCubic(p);
    scene.cameraTarget.copy(fromT).lerp(new THREE.Vector3(toTarget[0], toTarget[1], toTarget[2]), e);
    scene.zoomLevel = fromZ + (toZoom - fromZ) * e;
    scene._updateCameraTransform();
    if (p < 1) requestAnimationFrame(step);
    else if (done) done();
  }
  requestAnimationFrame(step);
}

// THREE aqui só para o Vector3 intermediário do tween:
import * as THREE from 'three';

// ------------------------------------------------------------- entrada pela recepção
$('enterBtn').addEventListener('click', () => {
  if (entered) return;
  entered = true;
  heroOverlay.classList.add('fade');
  container.classList.remove('locked'); // libera pan/zoom assim que a câmera começa a andar
  scene.sphericalOffset.set(24, 22, 24); // fixa o ângulo iso clássico durante a aproximação
  tweenCamera([-1.2, 1.05, 8.0], 1.32, 2600, () => {
    receptionPanel.classList.remove('hidden');
    viewActions.classList.remove('hidden');
  });
});

$('closePanelBtn').addEventListener('click', () => receptionPanel.classList.add('hidden'));
$('reopenPanelBtn').addEventListener('click', () => receptionPanel.classList.remove('hidden'));
$('backWideBtn').addEventListener('click', () => {
  tweenCamera([0, 2.0, 0.6], 0.6, 1800, null);
});

// ------------------------------------------------------------- catálogo + orçamento
const grid = $('servicesGrid');
SERVICES.forEach((svc) => {
  const card = document.createElement('div');
  card.className = 'svc-card';

  const top = document.createElement('div');
  top.className = 'svc-top';
  const name = document.createElement('div');
  name.className = 'svc-name';
  name.textContent = svc.name;
  const price = document.createElement('div');
  price.className = 'svc-price';
  price.textContent = '💌 Orçamento via e-mail';
  top.appendChild(name);
  top.appendChild(price);

  const benefit = document.createElement('p');
  benefit.className = 'svc-benefit';
  benefit.textContent = svc.benefit;

  const btn = document.createElement('button');
  btn.className = 'svc-cta';
  btn.type = 'button';
  btn.textContent = '💰 Pedir orçamento deste serviço';
  btn.setAttribute(
    'href',
    mailto(
      'Orçamento — ' + svc.name,
      'Olá! Conheci a AXIORYN AI LABS pelo site de demonstração (recepção virtual).\n\n' +
        'Serviço de interesse: ' + svc.name + '\n\n' +
        'Gostaria de receber o valor e as condições deste serviço por e-mail.\n\n' +
        'Empresa:\nNome:\nTelefone/e-mail:'
    )
  );
  btn.addEventListener('click', (ev) => {
    // botao <button>: disparamos o mailto manualmente para manter acessibilidade simples
    ev.preventDefault();
    window.location.href = btn.getAttribute('href');
  });

  card.appendChild(top);
  card.appendChild(benefit);
  card.appendChild(btn);
  grid.appendChild(card);
});

$('demoBtn').addEventListener('click', () => {
  window.location.href = mailto(
    'Demonstração gratuita de 15 minutos',
    'Olá! Quero agendar a demonstração de 15 minutos da AXIORYN AI LABS.\n\n' +
      'Empresa:\nNome:\nHorário de preferência:'
  );
});

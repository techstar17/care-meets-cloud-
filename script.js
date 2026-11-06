'use strict';
(() => {
  const slider = document.getElementById('world-slider');
  const explorer = document.getElementById('explorer');
  const tabs = [...document.querySelectorAll('[data-position]')];
  const content = {
    care: { position: 0, label: 'Dentistry: my motivation', kicker: 'DENTISTRY / WHY I STARTED', title: 'An interest in care.\nA question about tech.', description: 'I study Dentistry, and I wanted to bring technology into healthcare. That interest made me think about venturing into tech and learning what I could build.', noteLabel: 'THE STARTING POINT', note: 'This is my personal motivation for learning technology alongside Dentistry. I’m a student, still developing both interests.', caption: 'The reason behind the learning.' },
    bridge: { position: 50, label: 'The connection between Dentistry and Cloud', kicker: 'THE CONNECTION / MY LONGER-TERM GOAL', title: 'Build towards\nbetter care.', description: 'I want to bring technology into healthcare. Dentistry gives that interest a personal starting point; learning Cloud and DevOps is how I’m beginning to explore the technical side.', noteLabel: 'WHERE I AM TODAY', note: 'Building foundational skills and practical projects. Healthcare applications are a future direction, not a claim about my current work.', caption: 'A personal direction, still taking shape.' },
    cloud: { position: 100, label: 'Cloud: my learning and projects', kicker: 'CLOUD / HOW THE INTEREST GREW', title: 'One AWS video.\nA new direction.', description: 'The first time I heard about cloud computing was in an AWS video explaining the cloud. My interest grew from there, leading to training and hands-on projects with deployment tools, containers, and Python.', noteLabel: 'THE PRACTICE SO FAR', note: 'FocusFlow, LaunchDock, and Server Log Analyzer are learning projects. Their repositories are linked below so you can explore the work.', caption: 'Curiosity, turned into practical work.' }
  };
  let currentMode = '';
  function update() {
    const value = Number(slider.value);
    const mode = value < 34 ? 'care' : value > 66 ? 'cloud' : 'bridge';
    explorer.style.setProperty('--health-opacity', String(1 - value / 145));
    explorer.style.setProperty('--cloud-opacity', String(.31 + value / 145));
    if (mode === currentMode) return;
    currentMode = mode;
    explorer.dataset.mode = mode;
    const state = content[mode];
    slider.setAttribute('aria-valuetext', state.label);
    tabs.forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.position) === state.position)));
    document.getElementById('world-kicker').textContent = state.kicker;
    const heading = document.getElementById('world-title');
    heading.replaceChildren();
    state.title.split('\n').forEach((line, index) => { if (index) heading.append(document.createElement('br')); heading.append(document.createTextNode(line)); });
    document.getElementById('world-description').textContent = state.description;
    document.getElementById('world-note-label').textContent = state.noteLabel;
    document.getElementById('world-note-text').textContent = state.note;
    document.getElementById('visual-caption').textContent = state.caption;
  }
  slider.addEventListener('input', update);
  tabs.forEach(button => button.addEventListener('click', () => { slider.value = button.dataset.position; update(); }));
  update();
})();

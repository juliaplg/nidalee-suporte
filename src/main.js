async function loadChampionIcons() {
    try {
        const res = await fetch('src/elements/champ grid/adc.txt');
        const text = await res.text();
        const names = text.split('\n').map(s => s.trim()).filter(Boolean);

        const grid = document.getElementById('championGrid');

        names.forEach(name => {
            const wrapper = document.createElement('div');
            wrapper.className = 'champion-entry';

            const img = document.createElement('img');
            img.src = `src/images/champion icons/${name}.webp`;
            img.alt = name;

            const label = document.createElement('span');
            label.textContent = name;

            wrapper.appendChild(img);
            wrapper.appendChild(label);
            grid.appendChild(wrapper);
        });
    } catch (err) {
        console.error('Error loading champion icons:', err);
    }
}

document.addEventListener('DOMContentLoaded', loadChampionIcons);

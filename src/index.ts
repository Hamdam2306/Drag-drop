import { lists,leftBox,rightBox } from "./elements"

function setupDragDrop(sourceBox: HTMLElement | null, targetBox: HTMLElement | null) {
    let selected: HTMLElement | null = null;

    // 1. sourceBox ichidagi hozirgi .list elementlarini olish
    
    // const items = sourceBox?.querySelectorAll('.list') || [];

    lists.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            selected = e.target as HTMLElement;
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
        });
    });

    // 3. targetBox ga drop qilish imkoniyati
    if (targetBox) {
        targetBox.addEventListener('dragover', (e) => e.preventDefault());
        targetBox.addEventListener('drop', (e) => {
            e.preventDefault();
            if (selected) {
                targetBox.appendChild(selected);
                selected = null;
            }
        });
    } 
    if(sourceBox) { 
        sourceBox.addEventListener('dragover', (e) => e.preventDefault())
        sourceBox.addEventListener('drop', (e) => {
            e.preventDefault();
            if(selected){
                sourceBox.appendChild(selected)
                selected = null
            }
        } )
    }

    
}

// Dastlabki sozlash
setupDragDrop(leftBox, rightBox);  // left → right
// setupDragDrop(rightBox, leftBox);  // right → left
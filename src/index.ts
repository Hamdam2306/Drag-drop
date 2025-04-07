import { lists,leftBox,rightBox,close,modal } from "./elements"

function setupDragDrop(sourceBox: HTMLElement | null, targetBox: HTMLElement | null) {
    let selected: HTMLElement | null;

    lists.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            selected = e.target as HTMLElement;
        });

        
    });
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
setupDragDrop(leftBox, rightBox);  


lists.forEach(lists => {
    lists.addEventListener('click', () => {
       modal?.classList.remove('hidden')
    })
});

close?.addEventListener('click', () => {
    modal?.classList.add('hidden')
})



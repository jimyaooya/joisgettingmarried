
const toast = (text) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = text;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('toast_out');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}
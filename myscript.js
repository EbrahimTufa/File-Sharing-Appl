function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');

    for (const file of fileInput.files) {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    }

    // Clear the file input
    fileInput.value = '';
}

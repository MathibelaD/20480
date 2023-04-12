

letsReadFile = () => {
    const selectedFile = document.getElementById("file1")
    console.log(selectedFile.files)
    if (selectedFile.files.length != 0 && selectedFile.files[0].type.match(/text.*/)){
        console.log(selectedFile.files + "im in")
        const readFile = new FileReader()
        try {
            readFile.onload = (e) => {
                const targetDiv = document.getElementById("textArea")
                targetDiv.value = e.target.result
                console.log(targetDiv.value)
            }
            readFile.readAsText(selectedFile.files[0])
        } catch (error) {
            console.log("Cannt read text file")
        }
    }
}

letsReadFile()
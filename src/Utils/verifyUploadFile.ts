const verifyUploadFile = async (file?: File[]) => {
    if (file) {
        const acceptMinSize = await new Promise<boolean>((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(file[0])
            img.onload = function () {
                resolve(img.width > 70 && img.height > 70)
            }
        })

        return file[0].type === "image/jpeg"
            && file[0].size < 5 * 1048576
            && acceptMinSize
    }
}

export default verifyUploadFile
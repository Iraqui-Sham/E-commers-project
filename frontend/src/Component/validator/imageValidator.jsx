export default function imageValidator(e) {
    let { files } = e.target
    if (files.length === 0)
        return "Pic is mendatory"
    else if (files.length === 1) {
        const pic = files[0]
        if (pic.size > 1048576)
            return "Pic size is more than 1 mb please upload an image less than i mb"
        else if (pic.type === "image/jpeg" || pic.type === "image/jpg" || pic.type === "image/png" || pic.type === "image/gif")
            return ""
        else
            return "Inavlid Pic, please upload jpg, jpeg, png or gif image"
    }
    else {
        let errorMessage = []
        for (let index in Array.from(files)) {
            let pic = files[index]
            if (pic.size > 1048576)
                errorMessage.push(`Pic ${parseInt(index + 1)}size is more than 1 mb please upload an image less than 1 mb`)
            else if (pic.type === "image/jpeg" || pic.type === "image/jpg" || pic.type === "image/png" || pic.type === "image/gif") { }
            else
                errorMessage.push(`Inavlid Pic ${parseInt(index + 1)}, please upload jpg, jpeg, png or gif image`)
        }
        return errorMessage.length === 0 ? "" : errorMessage
    }
}
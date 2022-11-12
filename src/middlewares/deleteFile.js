const cloudinary = require('cloudinary').v2;

const deleteFile = (imgUrl) => {
    const imgSplited = imgUrl.split('/');
    const nameSplited = img[imgSplited.length - 1].split('.')[0];
    const folderSplited = imgSplited[imgSplited.length - 2];
    const public_id = `${folderSplited}/${nameSplited}`;

    cloudinary.uploader.destroy(public_id, () => {
        console.log('Movie deleted correctly');
    })
}

module.exports = {deleteFile}
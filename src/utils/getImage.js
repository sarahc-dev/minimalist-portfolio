export default function getImage(images, name) {
  const index = images.findIndex((element) => element.fields.title === name);

  return images[index].fields.file.url;
}

export default function createArrayNews(list) {
  // return list.reduce(
  //   (a, { multimedia, url, title, abstract, created_date }) => {
  //     if (multimedia && multimedia[2] && multimedia.caption)
  //       [...a, { multimedia, url, title, abstract, created_date }];
  //   },
  //   []
  // );
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    const {
      multimedia,
      url,
      title,
      abstract,
      published_date,
      section,
      subsection,
    } = list[i];
    if (
      multimedia &&
      multimedia[0]?.url &&
      multimedia[0]?.caption &&
      url &&
      title &&
      abstract &&
      published_date
    )
      arr.push(list[i]);
  }
  return arr;
}

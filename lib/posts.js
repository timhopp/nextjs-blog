import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// export async function getTrendingNews() {
//   fetch("https://news67.p.rapidapi.com/trending", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "news67.p.rapidapi.com",
//       "x-rapidapi-key": "80a35aed56msh4dbbb0b1e15af05p1dd2a9jsnd5e83e7094b3",
//     },
//   })
//     .then((response) => {
//       response = JSON.stringify(response);
//       console.log(response);
//       // return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

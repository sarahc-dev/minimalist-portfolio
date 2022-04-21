import { useEffect, useState } from "react";
import { getProjects } from "../contentful";

const promise = getProjects();

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise
      .then((response) => {
        const sanitizedResponse = response.map((item) => {
          const images = item.fields.images;
          const previewImages = images.filter((image) => image.fields.title.includes("portfolio"));

          return {
            id: item.sys.id,
            name: item.fields.name,
            description: item.fields.description,
            images: previewImages,
          };
        });
        setProjects(sanitizedResponse);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return [projects, isLoading];
}

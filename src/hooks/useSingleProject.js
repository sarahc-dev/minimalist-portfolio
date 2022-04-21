import { useEffect, useState } from "react";
import { getSingleProject } from "../contentful";

export default function useSingleProject(slug) {
  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const capitalizedName = slug[0].toUpperCase() + slug.slice(1);
    const promise = getSingleProject(capitalizedName);
    promise
      .then((result) => {
        setProject(result[0].fields);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [slug]);

  return [project, isLoading];
}

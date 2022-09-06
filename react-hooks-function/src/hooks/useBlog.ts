import { useRef, useState } from "react";

interface Blog {
  // TODO: Implement this interface...
  userId: number;
  id: number;
  title: string;
  body: string;
  //   "userId": 1,
  //   "id": 1,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

/**
 * //// - Return an State: refetch(), loading, error, data.
 * - Fetch Spaceflight blog by ID.
 * - Store in react state.
 *
 * - ID should be passed to useBlog in form of a string.
 * - Think about how to implement refetch method.
 *
 * - Ensure that changing `id` will trigger a new fetch (not related to refetch fn).
 */
const useBlog = (id: number) => {
  type Api = {
    data: Blog | null;
    error: string | null;
    loading: boolean;
    refetch: () => void;
  };

  const apiRef = useRef(null as unknown as Api);

  const [blogData, setBlogData] = useState<Api["data"]>(null);
  const [blogError, setBlogError] = useState<Api["error"]>(null);
  const [isLoading, setIsLoading] = useState<Api["loading"]>(false);

  const fetchBlog = async () => {
    // TODO: Fetch blog by id and store inside useState.
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.status !== 200)
        throw new Error("The server could not complete the request.");

      setBlogData(data);
    } catch (err) {
      const error = err as Error;
      console.log("error message", error);
      setBlogError(error.message ?? "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  // const reFetchUser = () => {
  //     fetchBlog()
  // }

  // Called only once because the apiRef.current is being initialized and is not null anymore on the next rerender.
  if (apiRef.current === null) {
    apiRef.current = {
      data: null,
      error: null,
      loading: false,
      refetch: fetchBlog,
    };
    apiRef.current.refetch();
  }
  apiRef.current.data = blogData;
  apiRef.current.error = blogError;
  apiRef.current.loading = isLoading;
  // apiRef.current.refetch = reFetchUser // This will assign a new function reference on each rerender.
  // Since the function does not change at any point in time, you can
  // assign it only once when initializing apiRef.current.

  return apiRef.current;
};

export default useBlog;

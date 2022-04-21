import useEventListener from "./useEventListener";

export default function useClickOutside(ref, button, cb) {
  useEventListener(
    "click",
    (e) => {
      if (button.current.contains(e.target)) return;
      if (ref.current == null || ref.current.contains(e.target)) return;
      cb(e);
    },
    document
  );
}

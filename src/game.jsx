export function Game({ setTail, setHead, tail, head, setCurrent }) {
  return (
    <button
      onClick={() => {
        let y = Math.floor(Math.random() * 2);
        if (y === 0) {
          setTail(tail + 1);
          setCurrent("Tail");
        } else {
          setHead(head + 1);
          setCurrent("Head");
        }
      }}
    >
      Play
    </button>
  );
}

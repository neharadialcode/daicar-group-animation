import { useEffect, useState } from "react";
const Dummy = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayValue, setDisplayValue] = useState(200);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const newValue = Math.max(200 - Math.floor(scrollPosition / 1) * 10, 0);
    setDisplayValue(newValue);
  }, [scrollPosition]);
  return (
    <div className="container min-vh-100 bg-white">
      <p>
        aperiam odio ut quos, nihil nisi harum quod? Ex porro doloribus culpa,
        quam veritatis cum quos iure odit sed pariatur eum, odio autem omnis
        eaque sunt quibusdam nobis impedit voluptate voluptatum vero quas esse
        exercitationem obcaecati consectetur! Laborum accusamus nostrum a
        expedita pariatur consequuntur reiciendis, repellat totam delectus
        voluptatum assumenda necessitatibus, atque culpa officiis eveniet saepe
        ullam autem aut doloribus odio quisquam alias libero. Aliquam, debitis
        ea porro tenetur omnis architecto ut adipisci fugiat quasi quaerat
        voluptatem pariatur animi tempore rerum eligendi, esse praesentium quo,
        eius optio. Harum molestiae doloremque autem suscipit. Qui, corrupti
        aliquam facere provident a eveniet fugit consequatur tempora tenetur
        ipsa temporibus ipsam, at maiores obcaecati iste officia perferendis
        eaque, nisi accusamus ea corporis. Corporis possimus sequi
        necessitatibus ducimus?
      </p>
      {/* <p>Scroll position: {scrollPosition}px</p> */}
      <p>Display value: {displayValue}</p>
      {/* Your scrollable content */}
      <p>
        aperiam odio ut quos, nihil nisi harum quod? Ex porro doloribus culpa,
        quam veritatis cum quos iure odit sed pariatur eum, odio autem omnis
        eaque sunt quibusdam nobis impedit voluptate voluptatum vero quas esse
        exercitationem obcaecati consectetur! Laborum accusamus nostrum a
        expedita pariatur consequuntur reiciendis, repellat totam delectus
        voluptatum assumenda necessitatibus, atque culpa officiis eveniet saepe
        ullam autem aut doloribus odio quisquam alias libero. Aliquam, debitis
        ea porro tenetur omnis architecto ut adipisci fugiat quasi quaerat
        voluptatem pariatur animi tempore rerum eligendi, esse praesentium quo,
        eius optio. Harum molestiae doloremque autem suscipit. Qui, corrupti
        aliquam facere provident a eveniet fugit consequatur tempora tenetur
        ipsa temporibus ipsam, at maiores obcaecati iste officia perferendis
        eaque, nisi accusamus ea corporis. Corporis possimus sequi
        necessitatibus ducimus?
      </p>
    </div>
  );
};
export default Dummy;

import ParentLogoPara from "./ParentLogoPara";

const Image = ({ src, alt, height, width, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="d-flex flex-column align-items-center w-100 w-sm-unset px-5 px-sm-0">
      <img
        className="cursor_pointer z_2"
        src={src}
        alt={alt}
        height={height}
        width={width}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div className="d-sm-none">
        <ParentLogoPara partnerNname={alt} />
      </div>
    </div>
  );
};

export default Image;

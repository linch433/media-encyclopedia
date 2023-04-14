import {useEffect, useState} from "react";
import {Button} from "antd";
import ReactPlayer from "react-player";

const ReactPlayerWrapper = ({yourUrl}) => {

  const [isWatchGameplayByPlayer, setIsWatchGameplayByPlayer] = useState(true);

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = yourUrl;
    link.target = "_blank";
    link.click();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsWatchGameplayByPlayer(false);
      } else {
        setIsWatchGameplayByPlayer(true);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isWatchGameplayByPlayer ? (
        <div style={{aspectRatio: 16 / 9, height: "50%", width: "50%"}}>
          <ReactPlayer url={yourUrl} controls={true} height={"100%"} width={"100%"} volume={0.2} stopOnUnmount={true}/>
        </div>
      ) : (
        <Button onClick={() => {
          handleClick()
        }}>Подивитись відеоролик</Button>
      )}
    </>
  );
};

export default ReactPlayerWrapper;

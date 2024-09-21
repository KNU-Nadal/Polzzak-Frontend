import styled from "styled-components";
import useToggle from "./useToggle";
import { useEffect, useRef } from "react";

const PopupContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    overflow-y: hidden;
`

const PopupWrapper = styled.div`
    display: flex;
    width: 100%;
    border-top-left-radius: ${({theme}) => theme.size.base};
    border-top-right-radius: ${({theme}) => theme.size.base};
    box-shadow: 0 0 16px 4px #00000040;
    border-bottom: none;
    padding: ${({theme}) => theme.size.base};
    background-color: ${({theme}) => theme.color.bg};
    z-index: 2;
`

const animationKeyFrame = [
    {
        opacity: 0.3,
        transform: `translateY(100%)`
    },
    {
        opacity: 1,
        transfrom: 'translateY(0)'
    }
]

const animationOption = {
    duration: 150,
    easing: "ease-in",
    fill: "forwards",
}

const FooterPopup = ({
    isOpen,
    toggleIsOpen,
    onPopupClose,
    children,
    ...props
}) => {
    const BackgroundRef = useRef();
    const PopupRef = useRef();
    useEffect(() => {
        if(PopupRef.current){
            const Popup = PopupRef.current;
            Popup.animate(animationKeyFrame, animationOption);
        }
    }, [])
    return(
        isOpen &&
        <PopupContainer ref={BackgroundRef}onClick={(e) => {
            if(e.target == BackgroundRef.current){
                toggleIsOpen()
                if(onPopupClose != undefined)
                    onPopupClose()
            }
            }}>
            <PopupWrapper ref={PopupRef} {...props}>
                {children}
            </PopupWrapper>
        </PopupContainer>

    )
}

const useFooterPopup = () => {
    const [isOpen, togglePopup] = useToggle(false);

    const footerPopup = ({children, ...props}) => {
        return (
            <FooterPopup isOpen={isOpen} toggleIsOpen={togglePopup} {...props}>
                {children}
            </FooterPopup>
        )
    }

    return [footerPopup, togglePopup];
}


export default useFooterPopup;
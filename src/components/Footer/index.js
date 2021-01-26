import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrap,
    SocialIcons, SocialLink, 
    SocailMedia, SocialMediaWrap, SocailLogo}
    from './FooterElementsFooter'


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocailMedia>
                    <SocialMediaWrap>
                        <SocailLogo to="/">Pizza</SocailLogo>
                        <SocialIcons>
                            <SocialLink href="/" target="_blank"aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialLink>
                            <SocialLink href="/" target="_blank"aria-label="Linkedin">
                                <FaGithub />
                            </SocialLink>
                            <SocialLink href="/" target="_blank"aria-label="Linkedin">
                                <FaTwitter />
                            </SocialLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocailMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrap,
    SocialIcons, SocialLink, 
    SocialMedia, SocialMediaWrap, SocialLogo}
    from './FooterElements'


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
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
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

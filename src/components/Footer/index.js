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
                        <SocialLogo to="https://mandeepsinghmar.netlify.app/">Mandeep Singhmar</SocialLogo>
                        <SocialIcons>
                            <SocialLink href="https://www.linkedin.com/in/mandeep-singhmar-7b222117a/" target="_blank"aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialLink>
                            <SocialLink href="https://github.com/Mandeepsinghmar/pizza-app" target="_blank"aria-label="Linkedin">
                                <FaGithub />
                            </SocialLink>
                            <SocialLink href="https://twitter.com/mandeep_singh_9" target="_blank"aria-label="Linkedin">
                                <FaTwitter />
                            </SocialLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

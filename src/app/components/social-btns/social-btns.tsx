import { GitIcon } from "../icons/git_icon";
import { InstaIcon } from "../icons/insta_icon";
import { LinkIcon } from "../icons/link_icon";
import"./social-btns.scss"

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps) {
    return (
        <div className="social">
            <a href="https://www.instagram.com/gabriel_r._barbosa/?next=%2F">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-rezende-686a85168/">
                <LinkIcon/>
            </a>
            <a href="https://github.com/Rezende21">
                <GitIcon/>
            </a>
        </div>
    )
}
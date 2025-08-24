import { useEffect, useState } from "react";

export const WorkPageId = "page-work";
export const AboutPageId = "page-about";
export const ContactPageId = "page-contact";
export const ProjectsPageId = "page-projects";
export const SkillsPageId = "page-skills";
export enum Page {
    Work = "work",
    About = "about",
    Contact = "contact",
    Projects = "projects",
    Skills = "skills",
}

const pageIds = [WorkPageId, AboutPageId, ContactPageId, ProjectsPageId, SkillsPageId];
console.log(pageIds);
export const useScroll = () => {
    const [page, setPage] = useState<string>("");

    const scrollHandler = () => {
        const documentTop = document.scrollingElement?.scrollTop!;
        const pages = pageIds.map((page) => document.getElementById(page));
        console.log(pages);
        let newPage = "";

        pages.forEach((page) => {
            if (page) {
                const top = page.offsetTop;
                const height = page.clientHeight;

                if (top < documentTop && top + height > documentTop) {
                    newPage = page.id;
                }
            }
        });

        setPage(newPage);
    };

    useEffect(() => {
        setTimeout(() => {
            scrollHandler();
        }, 100);

        document.addEventListener("scroll", scrollHandler);

        return () => {
            document.removeEventListener("scroll", () => {});
        };
    }, []);

    return page;
};

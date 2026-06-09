import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Dong Yuhao",
  DESCRIPTION: "Dong Yuhao is a student",
  EMAIL: "dong_yuhao@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/DongYu-hao",
  },
  {
    NAME: "Website",
    HREF: "https://dyhspace.top",
  },
  {
    NAME: "Rednote",
    HREF: "https://www.xiaohongshu.com/user/profile/68513ac40000000008039c4d",
  },
  {
    NAME: "Bilibili",
    HREF: "https://space.bilibili.com/1904695570",
  },
];

"use client";

import { usePathname } from "next/navigation";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes } from "@/app/resources";
import { about, webDesign, work } from "@/app/resources/content";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex hide="s" paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {routes["/"] && (
            <a href="/" aria-label="Hugo Macias, inicio">
              <img src="/images/Hglogo.svg" width="40" height="40" alt="" decoding="async" />
            </a>
          )}
          
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex as="nav" aria-label="Principal" gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" aria-label="Inicio" aria-current={pathname === "/" ? "page" : undefined} selected={pathname === "/"} />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    aria-label="Conóceme"
                    aria-current={pathname === "/about" ? "page" : undefined}
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    aria-label="Conóceme"
                    aria-current={pathname === "/about" ? "page" : undefined}
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {routes["/portfolio"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="briefcase"
                    href="/portfolio"
                    aria-label="Portafolio"
                    aria-current={pathname.startsWith("/portfolio") ? "page" : undefined}
                    label="Portafolio"
                    selected={pathname.startsWith("/portfolio")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="briefcase"
                    href="/portfolio"
                    aria-label="Portafolio"
                    aria-current={pathname.startsWith("/portfolio") ? "page" : undefined}
                    selected={pathname.startsWith("/portfolio")}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/work"
                    aria-label="Social Media"
                    aria-current={pathname.startsWith("/work") ? "page" : undefined}
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/work"
                    aria-label="Social Media"
                    aria-current={pathname.startsWith("/work") ? "page" : undefined}
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}
              {routes["/web-design"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="monitor"
                    href="/web-design"
                    aria-label="Diseños Web"
                    aria-current={pathname.startsWith("/web-design") ? "page" : undefined}
                    label={webDesign.label}
                    selected={pathname.startsWith("/web-design")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="monitor"
                    href="/web-design"
                    aria-label="Diseños Web"
                    aria-current={pathname.startsWith("/web-design") ? "page" : undefined}
                    selected={pathname.startsWith("/web-design")}
                  />
                </>
              )}
              {routes["/applications"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="app"
                    href="/applications"
                    aria-label="Aplicaciones"
                    aria-current={pathname.startsWith("/applications") ? "page" : undefined}
                    label="Aplicaciones"
                    selected={pathname.startsWith("/applications")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="app"
                    href="/applications"
                    aria-label="Aplicaciones"
                    aria-current={pathname.startsWith("/applications") ? "page" : undefined}
                    selected={pathname.startsWith("/applications")}
                  />
                </>
              )}
              
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

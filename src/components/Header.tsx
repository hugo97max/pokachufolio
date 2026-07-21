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
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {routes["/"] && (
            <img src="/images/Hglogo.svg" width="40px" alt="Hugo Macias Logo"/>
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
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
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
                    label="Portafolio"
                    selected={pathname.startsWith("/portfolio")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="briefcase"
                    href="/portfolio"
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
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/work"
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
                    label={webDesign.label}
                    selected={pathname.startsWith("/web-design")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="monitor"
                    href="/web-design"
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
                    label="Aplicaciones"
                    selected={pathname.startsWith("/applications")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="app"
                    href="/applications"
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

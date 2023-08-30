'use client'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { menus } from "@/constants";
import { IMenu } from '@/_types_';
import Link from "next/link";

export default function Toggle() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                variant='outline'
                icon={<HamburgerIcon />}
            />
            <MenuList>
                {menus.map((item: IMenu) => (
                    <MenuItem>
                        <Link
                            href="#"
                        >
                            {item.title}
                        </Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>

    )
}
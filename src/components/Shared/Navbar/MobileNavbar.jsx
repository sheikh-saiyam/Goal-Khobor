"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { Button } from "../../ui/button";

const MobileNavbar = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-3xl">
          <IoMdMenu size={40} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-56 mr-9">
        <DropdownMenuLabel>Navigation Links</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <Link
            href={"/"}
            prefetch={true}
            className="hover:underline underline-offset-2"
          >
            Home
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          <Link
            href={"/news"}
            prefetch={true}
            className="hover:underline underline-offset-2"
          >
            All News
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          <Link
            href={"/"}
            prefetch={true}
            className="hover:underline underline-offset-2"
          >
            Transfer News
          </Link>
        </DropdownMenuCheckboxItem>
        <Link
          href={"/"}
          prefetch={true}
          className="hover:underline underline-offset-2 cursor-pointer"
        >
          {" "}
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Power Rankings
          </DropdownMenuCheckboxItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavbar;

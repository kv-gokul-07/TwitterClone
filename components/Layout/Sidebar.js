import { BsBellFill, BsHouseDoorFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {

    const items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseDoorFill
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: "/users/123",
            icon: FaUser
        }
    ]
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
            <div className="space-y-2 lg:w-[230px]">
                <SidebarLogo />
                { items.map((item) => (
                    <SidebarItem
                    key={item.href}
                    Icon={item.icon}
                    label={item.label}
                    item={item} />
                ))
                }
                <SidebarItem onclick={() => {}} Icon={AiOutlineLogout} label={"Logout"}/>
                <SidebarTweetButton />
            </div>
        </div>
    </div>
  )
}

export default Sidebar
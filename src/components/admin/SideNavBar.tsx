'use client';
import React from 'react';
import { Icon } from '@/shared/Icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const pages = [
  { title: 'Dashboard', icon: 'Grid', link: '/admin' },
  { title: 'Employee', icon: 'People', link: '/admin/employee' },
  { title: 'Attendence', icon: 'People', link: '/admin/attendence' },
  { title: 'Payroll', icon: 'PersonSlash', link: '/admin/payroll' },
  { title: 'Leave', icon: 'PersonSlash', link: '/admin/leave' },
  { title: 'Tasks', icon: 'PersonSlash', link: '/admin/tasks' }

];
const SideNavBar = () => {
  const pathname = usePathname();
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {pages.map((item: any, index) => {
          return (
            <li className="nav-item" key={index}>
              <Link className={`nav-link ${pathname !== item.link ? 'collapsed' : ''}`} href={item.link}>
                {/* <Icon iconName={item?.icon} /> */}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideNavBar;

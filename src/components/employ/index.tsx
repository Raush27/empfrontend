"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideNavBar from '../admin/SideNavBar';
import TopNabbar from '../admin/TopNabbar';

const Employ = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const toggleSidebar = () => {
      document.body.classList.toggle('toggle-sidebar');
    };

    const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
    if (toggleSidebarBtn) {
      toggleSidebarBtn.addEventListener('click', toggleSidebar);
    }

    const userProfile = document.getElementById('userProfile');
    const userProfileShow = document.getElementById('userProfileShow');

    const handleUserProfileClick = () => {
      if (userProfileShow?.classList.contains('show')) {
        userProfileShow.classList.remove('show');
        userProfileShow.classList.remove('extraShow');
      } else {
        userProfileShow?.classList.add('show');
        userProfileShow?.classList.add('extraShow');
      }
    };

    if (userProfile) {
      userProfile.addEventListener('click', handleUserProfileClick);
    }

    const closeOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.matches('.nav-profile')) {
        const sharedowns = document.getElementsByClassName('profile');
        for (let i = 0; i < sharedowns.length; i++) {
          const openSharedown = sharedowns[i] as HTMLElement;
          if (openSharedown.classList.contains('show')) {
            openSharedown.classList.remove('show');
          }
        }
      }
    };

    window.onclick = closeOutsideClick;

    if (userProfile) {
      userProfile.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }

    return () => {
      if (toggleSidebarBtn) {
        toggleSidebarBtn.removeEventListener('click', toggleSidebar);
      }
      if (userProfile) {
        userProfile.removeEventListener('click', handleUserProfileClick);
        userProfile.removeEventListener('click', (event) => {
          event.stopPropagation();
        });
      }
      window.onclick = null;
    };
  }, []);

  return (
    <div>
      {/* <Script type="text/javascript" src="/static/admin.js"></Script> */}
      <div>
        <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between">
            <Link href="/admin" className="logo d-flex align-items-center">
              <Image alt="" src="/icons/rate_11543370.png" height={50} width={50} />
            </Link>
            {/* <Icon iconName="List" /> */}
          </div>
          <TopNabbar />
        </header>
        <SideNavBar />
        <main id="main" className="main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Employ;

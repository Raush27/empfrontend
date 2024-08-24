import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

export interface typeInfo {
  breadcrumb: type[];
  title: string;
}

export interface type {
  active: boolean;
  url: string;
  title: string;
}

const Breadcrumb: NextPage<typeInfo> = ({ breadcrumb, title }) => {
  return (
    <div className="pagetitle">
      <h1>{title}</h1>
      <nav>
        <ol className="breadcrumb">
          {breadcrumb &&
            breadcrumb.map((item: type, index: number) => {
              return (
                <li className={`breadcrumb-item ${item.active ? ' active' : ''}`} key={index}>
                  {item.active ? <>{item.title}</> : <Link href={item.url}>{item.title}</Link>}
                </li>
              );
            })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;

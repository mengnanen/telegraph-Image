import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full  h-1/12 text-center  bg-slate-200  flex flex-col justify-center items-center">
      <div >
        <p className="text-xs text-gray-500">Copyright © 2025 王小二. All rights reserved. Made with Love. 
          请勿上传违反中国法律的图片，违者后果自负，本站不承担任何责任。
        </p>
      </div>
    </footer>
  );
}

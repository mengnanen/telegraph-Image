import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full bg-slate-200 py-4">
      <div className="mx-auto text-center space-y-1">
        <p className="text-xs text-gray-500">
          Copyright © 2025 王小二. All rights reserved. Made with Love.
        </p>
        <p className="text-xs text-gray-500">
          请勿上传违反中国法律的图片，违者后果自负，本站不承担任何法律责任。
        </p>
      </div>
    </footer>
  );
}

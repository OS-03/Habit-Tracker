import React from 'react';
const Footer: React.FC = () => {
    return (
        <footer className=" bottom-0 w-full bg-purple-50 border-t border-purple-200 py-3 px-5 text-center z-50">
            <p className="text-sm text-purple-600 m-0">
                © {new Date().getFullYear()} Habit Tracker. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
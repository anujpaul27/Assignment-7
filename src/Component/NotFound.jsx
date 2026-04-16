import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div class="flex items-center justify-center min-h-screen bg-base-300 p-4">
            <div class="card w-96 bg-base-100 shadow-xl border border-base-content/10">
                <div class="card-body items-center text-center">
                    <div class="badge badge-error gap-2 mb-4">Error 404</div>
                    <p class="text-base-content/70">We can't find the page you're looking for.</p>
                    <div class="card-actions mt-6">
                        <Link to={'/'} class="btn btn-outline btn-wide">Return Home</Link >
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;
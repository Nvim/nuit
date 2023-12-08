import { Link } from '@inertiajs/react';

function EnhancedNavbar({ auth }) {
  return (
    <div className="bg-light-pastel-yellow text-black py-4">
  <div className="container mx-auto px-4">
    <nav className="flex justify-between items-center">
      <div className="text-2xl font-bold">ECOLO &#127795;</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-purple-900">Accueil</a>
        </li>
        <li>
        <Link
                href={route('login')}
                className="hover:text-gray-300 hover:text-purple-900"
              >
                Log in
              </Link>
        </li>
        <li>
        <Link
                href={route('register')}
                className="hover:text-gray-300 hover:text-purple-900"
              >
                Register
              </Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
  );
}

export default EnhancedNavbar;

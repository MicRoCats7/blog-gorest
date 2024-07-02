const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-sm text-gray-500">© 2024 All rights reserved. by Amri Iqra Samudra Al-Fatihah</p>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row text-center md:gap-5 gap-2">
              <li>
                <span className="text-sm text-gray-500">Privacy Policy</span>
              </li>
              <li>
                <span className="text-sm text-gray-500">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
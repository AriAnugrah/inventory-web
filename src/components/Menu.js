import React from 'react'

export default function Menu(){
    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="dist/img/enigma.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">Enigma Inventory</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/admin.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Admin</a>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}


                        <li className="nav-item has-treeview">

                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/UI/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>General</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/icons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Icons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/buttons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Buttons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/sliders.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Sliders</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/modals.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Modals &amp; Alerts</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/navbar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Navbar &amp; Tabs</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/timeline.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Timeline</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/ribbons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Ribbons</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Forms
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="/unit" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Form Unit</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/item" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Form Item</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/stock" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Form Stock</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-table" />
                                <p>
                                    Tables
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="/units" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Unit Table</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/items" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Item Table</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/stocks" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Stock Table</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-header">PURCHASE</li>
                        <li className="nav-item">
                            <a href="*" className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt" />
                                <p>
                                     Buy Item

                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Gallery
                                </p>
                            </a>
                        </li>

                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon far fa-plus-square" />
                                <p>
                                    Extras
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/examples/register.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Add User</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/forgot-password.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Forgot Password</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}
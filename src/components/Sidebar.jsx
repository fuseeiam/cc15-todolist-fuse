import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import './Sidebar.scss';

function Sidebar() {
    return (
        <>
            <sidebar className='sidebar'>
                <div className='sidebar__inbox'>
                    <FaInbox /> <h2>Inbox</h2>
                </div>
                <div className='sidebar__calender'>
                    <FaCalendar /><h2>Today</h2>
                </div>
                <div className='sidebar__nextday'>
                    <FaCalendarAlt /> <h2>Next 7 days</h2>
                </div>
            </sidebar>

            <project className='projects'>
                <div className='project_project'>
                    <FaChevronDown /><h2>Project</h2>
                </div>

                <div className='project_work'>
                    <FaInbox /> <h2>Work</h2>
                </div>
                <div className='project_home'>
                    <FaInbox /> <h2>Home</h2>
                </div>
            </project>

        </>
    );
}

export default Sidebar;
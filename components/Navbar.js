import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import IconButton from '@material-ui/core/IconButton';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Badge from '@material-ui/core/Badge';



function Navbar() {
    return (
        <div className="h-16 border-b w-full flex items-center justify-between px-6">
            <div>
                <IconButton>
                    <MenuOutlinedIcon/>
                </IconButton>
                
            </div>
            <div className="text-icons-color flex mr-10 space-x-2">
                <IconButton>
                    <Badge badgeContent={4} color="secondary">
                        <ChatBubbleOutlineOutlinedIcon/>
                    </Badge>
                </IconButton>
                <IconButton>
                    <Badge badgeContent={1} color="secondary">
                        <NotificationsNoneOutlinedIcon/>
                    </Badge>    
                </IconButton>
                
                
            </div>
            
        </div>
    )
}

export default Navbar

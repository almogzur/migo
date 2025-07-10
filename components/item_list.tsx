import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';



import ImageIcon from '@mui/icons-material/Image';


export type ListItemPropsType = {
    text: string,
    secondary?: string
    icon?: React.ReactNode
}

export type ListPropsType = {
    texts: ListItemPropsType[]
}



export default function CustomList({ texts }: ListPropsType) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' , direction: 'rtl' }}>
            {texts.map((item, i) => (
                <ListItem key={item.text + i}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.light' }} >
                            {item.icon || <ImageIcon />}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        sx={{textAlign: 'right'}}
                        primary={item.text}
                        secondary={item.secondary}
                        
                    />
                </ListItem>
            ))}

        </List>
    );
}
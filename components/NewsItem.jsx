import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './newsitem.css';

const NewsItem = ({ title, description, imageUrl, newsUrl, author }) => {
    // Function to truncate text if it exceeds a certain length
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    return (
        <div className='container'>
            <div className='card'>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        alt="News Image"
                        height="150"
                        image={imageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {truncateText(title, 50)} {/* Truncate title if it exceeds 50 characters */}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {truncateText(description, 150)} {/* Truncate description if it exceeds 150 characters */}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary">
                            <i>By {author ? author : "Unrevealed"} on {new Date().toDateString()}</i>
                        </Typography>
                    </CardContent>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="small">Learn More</Button>
                    </a>
                </Card>
            </div>
        </div>
    );
};

export default NewsItem;

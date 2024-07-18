import React from "react";

export const userQuery = `
    query Viewer {
        Viewer {
            id
            name
            about
            bannerImage
            isFollowing
            isFollower
            isBlocked
            bans
            unreadNotificationCount
            siteUrl
            donatorTier
            donatorBadge
            moderatorRoles
            createdAt
            updatedAt
            moderatorStatus
            avatar {
                large
                medium
            }
        }
    }
`;

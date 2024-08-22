"use client";

import styled from "styled-components";

export const PageContainer = styled.div`
    z-index: 10;
    background-color: var(--color-primary);
    position: sticky;
`

export const BlockText = styled.p`
    display: block;
    padding: 3px;
`

export const ExternalLink = styled.a`
    padding: 3px;

    &:hover {
        text-shadow: 0px 0px 10px;
    }
`
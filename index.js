(
    () =>
    {
        const removeShorts = () =>
        {
            const containers = [
                'ytd-grid-video-renderer',
                'ytd-video-renderer',
                'ytm-item-section-renderer',
                'ytm-rich-item-renderer',
                'ytm-rich-section-renderer',
            ];

            containers
                .forEach
                (
                    container =>
                    {
                        const shorts= Array
                            .from(document.querySelectorAll(`${container} a[href^="/shorts"]`))
                            .forEach
                            (
                                a =>
                                {
                                    const video = a.closest(container);
                                    video.remove();
                                }
                            )
                        ;
                    }
                )
            ;
        }

        const observer = new MutationObserver(removeShorts);
        observer.observe
        (
            document,
            {
                childList:  true,
                subtree:    true,
            }
        );

        removeShorts();
    }
)();

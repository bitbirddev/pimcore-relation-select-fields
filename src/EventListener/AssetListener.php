<?php

namespace RelationSelectFieldsBundle\EventListener;

use Pimcore\Event\BundleManager\PathsEvent;
use Pimcore\Event\BundleManagerEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class AssetListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            BundleManagerEvents::JS_PATHS          => 'addJsPaths',
            BundleManagerEvents::EDITMODE_JS_PATHS => 'addEditModeJsPaths'
        ];
    }

    public function addJsPaths(PathsEvent $event): void
    {
        $event->addPaths([
            "/bundles/relationselectfields/admin/js/pimcore/startup.js",
            "/bundles/relationselectfields/admin/js/classfields/many-to-one-relation-select/data.js",
            "/bundles/relationselectfields/admin/js/classfields/many-to-one-relation-select/tag.js",
            "/bundles/relationselectfields/admin/js/classfields/many-to-many-relation-select/data.js",
            "/bundles/relationselectfields/admin/js/classfields/many-to-many-relation-select/tag.js",
        ]);
    }

    public function addEditModeJsPaths(PathsEvent $event): void
    {
        $event->addPaths([
            "/bundles/relationselectfields/admin/js/pimcore/startup.js",
            "/bundles/relationselectfields/admin/js/document-tags/many-to-one-relation-select.js",
            "/bundles/relationselectfields/admin/js/document-tags/many-to-many-relation-select.js",
        ]);
    }
}

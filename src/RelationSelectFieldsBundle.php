<?php

namespace RelationSelectFieldsBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\Traits\PackageVersionTrait;

class RelationSelectFieldsBundle extends AbstractPimcoreBundle
{
    use PackageVersionTrait;

    public const PACKAGE_NAME = 'nambu-ch/pimcore-relation-select-fields';

    protected function getComposerPackageName(): string
    {
        return self::PACKAGE_NAME;
    }

    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
